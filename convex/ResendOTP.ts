import { Email } from "@convex-dev/auth/providers/Email";

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function getSafeOtpEndpoint(): string {
  const raw = getRequiredEnv("OTP_ENDPOINT");
  const parsed = new URL(raw);
  if (parsed.protocol !== "https:") {
    throw new Error("OTP_ENDPOINT must use HTTPS");
  }
  return parsed.toString();
}

function generateOTP(length: number): string {
  const digits = "0123456789";
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (num) => digits[num % digits.length]).join("");
}

export const ResendOTP = Email({
  id: "resend-otp",
  maxAge: 60 * 15,
  async generateVerificationToken() {
    return generateOTP(6);
  },
  async sendVerificationRequest({ identifier: email, token }) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);
    let response: Response;
    try {
      response = await fetch(getSafeOtpEndpoint(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        signal: controller.signal,
        body: JSON.stringify({
          email,
          token,
          chatId: getRequiredEnv("CHAT_ID"),
          appName: `${process.env.APP_NAME}` || "My App",
          secretKey: getRequiredEnv("SECRET_KEY"),
        }),
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to send verification email");
    }
  },
});
