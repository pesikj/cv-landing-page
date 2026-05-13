"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const PHOTO_URL =
  "https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/p8peme0uh73i10p4yul5jqh5/new-chat/hDtzSPyOOR0rNPb90O9Hs.jpg";

const workExperience = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Rapid7",
    companyUrl: "https://www.rapid7.com/",
    location: "Prague",
    period: "Apr 2024 – Present",
    description:
      "Part of the Content Development team, expanding the portfolio of products covered by the InsightVM vulnerability detection product. Responsibilities include product research, vendor communication, designing and implementing detection of installed products, developing plug-ins for vendor data processing, testing, and resolving customer requirements.",
    tech: ["Python", "InsightVM", "Vulnerability Detection", "Plugin Development"],
    isCurrent: true,
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Huld",
    companyUrl: "https://huld.io/",
    location: "Prague / Pilsen",
    period: "May 2019 – Apr 2024",
    description:
      "Worked on a ground control system for CubeSats (OrbitCon) using React and Node.js. Contributed to the Archaeological Map of the Czech Republic and an Automatic Weight Measuring System — both Python/Django web applications. Contributed to technical proposals submitted to the European Space Agency (ESA).",
    tech: ["Python", "Django", "React", "Node.js", "ESA Proposals"],
    isCurrent: false,
  },
  {
    id: 3,
    role: "IT Consultant & Data Analyst",
    company: "Aimtec",
    companyUrl: "https://www.aimtecglobal.com/",
    location: "Pilsen",
    period: "Feb 2015 – Apr 2019",
    description:
      "Customized and developed plugins for MS Dynamics 365, MS Project Server, and MS SharePoint. Created Excel and Power BI reports, trained new employees, developed data warehouses using SQL Server Analysis Services, and implemented ETL processes using Transact-SQL and SQL Server Integration Services. Gained experience with Microsoft Azure.",
    tech: ["MS Dynamics 365", "Power BI", "SQL Server", "SSIS", "SSAS", "Azure"],
    isCurrent: false,
  },
  {
    id: 4,
    role: "IT Reporting Specialist",
    company: "Sony DADC",
    companyUrl: "https://www.sonydadc.com/",
    location: "Pilsen",
    period: "Sep 2013 – Jan 2015",
    description:
      "Created and administered database reports using SAP DESKi and SAP WEBi applications, as well as Oracle SQL. Administered BI servers based on Infor BI applications.",
    tech: ["SAP BusinessObjects", "Oracle SQL", "Infor BI"],
    isCurrent: false,
  },
  {
    id: 5,
    role: "Software Developer",
    company: "Sportcentral.cz",
    companyUrl: "https://www.sportcentral.cz/",
    location: "Pilsen",
    period: "Jun 2012 – Sep 2012",
    description:
      "Contributed to the development of the Sportcentral web application using PHP and the Nette framework.",
    tech: ["PHP", "Nette Framework"],
    isCurrent: false,
  },
];

const skills = [
  {
    category: "Python & Data Science",
    items: ["Python", "pandas", "scipy", "scikit-learn", "statsmodels", "ElementTree"],
  },
  {
    category: "Web Development",
    items: ["Django", "React.js", "Node.js", "JavaScript", "jQuery", "HTML/CSS", "Bootstrap"],
  },
  {
    category: "Data & BI",
    items: ["Power BI", "SQL Server", "PostgreSQL", "PL/SQL", "MongoDB", "ElasticSearch"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Linux", "Git", "AWS", "Azure"],
  },
  {
    category: "Enterprise Systems",
    items: ["MS Dynamics 365", "MS SharePoint", "SSIS", "SSAS", "SSRS"],
  },
  {
    category: "Other",
    items: ["C#", "Java", "PRINCE2", "ETL Processes", "REST API"],
  },
];

const certifications = [
  { name: "PRINCE2 Foundations", org: "POTIFOB", year: "2022" },
  { name: "Power BI Advanced Techniques", org: "GOPAS", year: "2018" },
  { name: "Project Management", org: "Wiseman", year: "2018" },
  { name: "Time Management", org: "Roman Čiviš", year: "2016" },
  { name: "Microsoft Excel Advanced", org: "GOPAS", year: "2015" },
];

const languages = [
  { lang: "Czech", level: "Native" },
  { lang: "English", level: "Advanced" },
  { lang: "German", level: "Basic" },
];

export default function CVPageContent() {
  const [activeJob, setActiveJob] = useState<number>(1);
  const sectionRefs = useRef<Map<string, Element>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleJob = (id: number) => {
    setActiveJob((prev) => (prev === id ? 0 : id));
  };

  return (
    <div className="min-h-screen font-sans bg-cream">
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-navy-dark">
        {/* Subtle geometric bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, var(--color-navy-300) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
          />
          {/* Horizontal rule accent */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-navy-700 opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-5 gap-12 items-center relative z-10">
          {/* Text — 3 cols */}
          <div className="md:col-span-3">
            <h1
              className="font-display text-6xl md:text-8xl font-semibold leading-none mb-5 text-white"
            >
              Jiří<br />Pešík
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16" style={{ background: "var(--color-gold)" }} />
              <p className="text-navy-300 text-lg md:text-xl font-light tracking-wide">
                Senior Software Engineer</p>
            </div>

          </div>

          {/* Photo — 2 cols */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Rings */}
              <div
                className="absolute inset-0 rounded-full scale-[1.12] opacity-20 border"
                style={{ borderColor: "var(--color-navy-400)" }}
              />
              <div
                className="absolute inset-0 rounded-full scale-[1.06] opacity-40 border"
                style={{ borderColor: "var(--color-gold)" }}
              />
              {/* Corner accent lines */}
              <div
                className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2"
                style={{ borderColor: "var(--color-gold)" }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2"
                style={{ borderColor: "var(--color-gold)" }}
              />

              <div
                className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden relative z-10 border-4"
                style={{ borderColor: "var(--color-navy-700)" }}
              >
                <Image
                  src={PHOTO_URL}
                  alt="Jiří Pešík"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader label="Career" title="Work Experience" />
          </div>

          <div className="mt-16 relative">
            {/* Vertical line (desktop) */}
            <div
              className="absolute left-[1.65rem] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, var(--color-gold), var(--color-navy-100))" }}
            />

            <div className="space-y-3">
              {workExperience.map((job, index) => (
                <div key={job.id} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                  <TimelineItem
                    job={job}
                    isActive={activeJob === job.id}
                    onClick={() => toggleJob(job.id)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader label="Expertise" title="Skills & Technologies" light />
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group, i) => (
              <div
                key={group.category}
                className="reveal p-6 rounded-sm border transition-colors duration-300 group"
                style={{
                  background: "var(--color-navy-800)",
                  borderColor: "var(--color-navy-600)",
                  transitionDelay: `${i * 60}ms`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--color-navy-600)")
                }
              >
                <h3
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-gold)" }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-sm"
                      style={{
                        color: "var(--color-navy-200)",
                        background: "var(--color-navy-700)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LECTURING ───────────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader label="Education" title="Lecturing" />
          </div>

          <div className="mt-16 reveal">
            <div
              className="rounded-sm border overflow-hidden"
              style={{ borderColor: "var(--color-navy-100)" }}
            >
              {/* Header */}
              <div
                className="px-7 py-5 flex items-center gap-4 border-b"
                style={{ background: "var(--color-navy-dark)", borderColor: "var(--color-navy-700)" }}
              >
                <div>
                  <h3 className="font-semibold text-base text-white">Lecturer</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--color-navy-300)" }}>
                    <Link
                      href="https://www.czechitas.cz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline underline-offset-4 transition-colors"
                      style={{ color: "var(--color-gold-light)" }}
                    >
                      Czechitas
                    </Link>
                    {" "}· Prague
                  </p>
                </div>
              </div>

              {/* Course list */}
              <div className="divide-y" style={{ background: "white", borderColor: "var(--color-navy-50)" }}>
                {[
                  {
                    name: "Vibe Coding in Practice: Build Your Own Website with AI Without Programming",
                    url: "https://www.czechitas.cz/kurzy/vibe-coding-v-praxi-vytvor-si-vlastni-web-s-ai-bez-programovani",
                    desc: "Hands-on introduction to building websites using AI tools — no prior programming experience required.",
                  },
                  {
                    name: "Python Programming",
                    url: "https://www.czechitas.cz/kurzy/programovani-v-pythonu",
                    desc: "Python course covering dictionaries, functions, OOP, and API integration for data work.",
                  },
                  {
                    name: "AI Transformation Manager",
                    url: "https://www.czechitas.cz/kurzy/manazerka-ai-transformace",
                    desc: "3-month intensive on planning and leading AI transformation strategies within organizations.",
                  },
                  {
                    name: "Digital Data Academy",
                    url: "https://www.czechitas.cz/kurzy/digitalni-akademie-data",
                    desc: "Semester-long data analytics program covering Python, SQL, and data visualization from scratch.",
                  },
                  {
                    name: "Python for Data Analysis",
                    url: "https://www.czechitas.cz/kurzy/python-pro-datovou-analyzu",
                    desc: "Data analysis with pandas — data cleaning, visualization, and practical use of AI tools.",
                  },
                  {
                    name: "Data Science Foundations in Python",
                    url: null,
                    desc: "Foundational data science concepts and workflows implemented in Python.",
                  },
                ].map((course) => (
                  <div key={course.name} className="px-7 py-4 flex items-start gap-4 group">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-150"
                      style={{ background: "var(--color-gold)" }}
                    />
                    <div>
                      {course.url ? (
                        <Link
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm hover:underline underline-offset-4 transition-colors"
                          style={{ color: "var(--color-navy-dark)" }}
                        >
                          {course.name}
                        </Link>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: "var(--color-navy-dark)" }}>
                          {course.name}
                        </p>
                      )}
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-navy-400)" }}>
                        {course.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION & CERTIFICATIONS ──────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div className="reveal">
            <SectionHeader label="Academic" title="Education" />
            <div className="mt-10 space-y-8">
              <div
                className="pl-6 border-l-2"
                style={{ borderColor: "var(--color-gold)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-navy-400)" }}>
                  2013
                </p>
                <h3 className="font-display text-xl font-semibold text-navy-dark">Master's Degree</h3>
                <span
                  className="text-sm mt-1 block"
                  style={{ color: "var(--color-navy-600)" }}
                >
                  Financial Informatics and Statistics
                </span>
                <Link
                  href="https://www.fav.zcu.cz/en/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm mt-0.5 block hover:underline underline-offset-4 transition-colors"
                  style={{ color: "var(--color-navy-400)" }}
                >
                  University of West Bohemia, Faculty of Applied Sciences
                </Link>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--color-navy-400)" }}>
                  2-year academic program combining advanced statistics and probability (hypothesis testing, multivariate analysis, time series forecasting), financial mathematics (derivatives, portfolio analysis, insurance modelling), mathematical optimization (graph algorithms, operations research), and advanced database systems.
                </p>
              </div>
              <div
                className="pl-6 border-l-2"
                style={{ borderColor: "var(--color-navy-200)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-navy-400)" }}>
                  2007
                </p>
                <h3 className="font-display text-xl font-semibold text-navy-dark">School-Leaving Certificate</h3>
                <p className="text-sm mt-1" style={{ color: "var(--color-navy-600)" }}>
                  Information Technology
                </p>
                <Link
                  href="https://www.spseplzen.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm mt-0.5 block hover:underline underline-offset-4 transition-colors"
                  style={{ color: "var(--color-navy-400)" }}
                >
                  High School of Electrical Engineering, Pilsen
                </Link>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <SectionHeader label="Professional" title="Certifications" />
            <div className="mt-10 space-y-5">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 group">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-150"
                    style={{ background: "var(--color-gold)" }}
                  />
                  <div>
                    <p className="font-semibold text-sm text-navy-dark">{cert.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-navy-400)" }}>
                      {cert.org} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PUBLICATIONS ────────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader label="Research" title="Publications" light />
          </div>

          <div className="mt-16">
            <div
              className="reveal p-7 rounded-sm border transition-colors duration-300"
              style={{ background: "var(--color-navy-800)", borderColor: "var(--color-navy-600)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-navy-600)")}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "var(--color-gold)", color: "var(--color-navy-dark)" }}
                >
                  <BookIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href="https://nnw.cz/obsahy24.html#34.019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-semibold leading-snug hover:underline underline-offset-4 transition-colors"
                    style={{ color: "var(--color-gold-light)" }}
                  >
                    Machine Learning Image Recognition for GNSS Jamming Signals Categorization
                  </Link>
                  <p className="text-sm mt-2" style={{ color: "var(--color-navy-300)" }}>
                    J. Steiner, J. Pešík
                  </p>
                  <p className="text-xs mt-3" style={{ color: "var(--color-navy-400)" }}>
                    <span
                      className="inline-block px-2 py-0.5 rounded-sm mr-3"
                      style={{ background: "var(--color-navy-700)", color: "var(--color-navy-200)" }}
                    >
                      Neural Network World
                    </span>
                    Vol. 34, No. 6, pp. 341–360 · 2024
                  </p>
                  <p className="text-xs mt-2" style={{ color: "var(--color-navy-500)" }}>
                    DOI: 10.14311/NNW.2024.34.019
                  </p>
                  <p className="text-sm mt-4 leading-relaxed" style={{ color: "var(--color-navy-400)" }}>
                    Explores machine learning image recognition for categorizing GNSS jamming signals.
                    Using data from a long-term highway monitoring campaign with over 2,000 jamming events,
                    five ResNet models (18–152 layers) were evaluated — achieving over 90% precision in
                    jamming signal classification.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "ResNet", "Machine Learning", "GNSS", "Signal Classification"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-sm"
                        style={{ color: "var(--color-navy-200)", background: "var(--color-navy-700)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER / LANGUAGES & CONTACT ────────────────────────── */}
      <footer className="py-16 bg-navy-dark border-t border-navy-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Languages */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--color-navy-400)" }}
              >
                Languages
              </p>
              <div className="flex gap-10">
                {languages.map(({ lang, level }) => (
                  <div key={lang}>
                    <p className="text-white font-semibold text-sm">{lang}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-navy-400)" }}>
                      {level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4 md:text-right"
                style={{ color: "var(--color-navy-400)" }}
              >
                Contact
              </p>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="https://www.linkedin.com/in/jiripesik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline underline-offset-4"
                  style={{ color: "var(--color-gold-light)" }}
                >
                  <LinkedInIcon />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/pesikj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline underline-offset-4"
                  style={{ color: "var(--color-gold-light)" }}
                >
                  <GitHubIcon />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  light = false,
}: {
  label: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      <p
        className="text-xs tracking-widest uppercase mb-2"
        style={{ color: light ? "var(--color-navy-400)" : "var(--color-navy-400)" }}
      >
        {label}
      </p>
      <h2
        className={`font-display text-4xl md:text-5xl font-semibold ${light ? "text-white" : "text-navy-dark"}`}
      >
        {title}
      </h2>
      <div
        className="w-12 h-0.5 mt-4"
        style={{ background: "var(--color-gold)" }}
      />
    </div>
  );
}

function TimelineItem({
  job,
  isActive,
  onClick,
  index,
}: {
  job: (typeof workExperience)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div className="relative md:pl-16">
      {/* Timeline node (desktop) */}
      <div
        className="absolute left-0 top-[1.4rem] w-[3.3rem] h-[3.3rem] rounded-full items-center justify-center z-10 -translate-x-1/2 border-2 hidden md:flex transition-all duration-300 cursor-pointer select-none"
        style={{
          background: isActive ? "var(--color-gold)" : "var(--color-cream)",
          borderColor: isActive ? "var(--color-gold)" : "var(--color-navy-200)",
        }}
        onClick={onClick}
      >
        <span
          className="text-xs font-bold leading-none"
          style={{ color: isActive ? "var(--color-navy-dark)" : "var(--color-navy-400)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Card */}
      <div
        className="rounded-sm border overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          borderColor: isActive ? "var(--color-gold)" : "var(--color-navy-100)",
          boxShadow: isActive ? "0 4px 24px rgba(201,168,76,0.12)" : "none",
        }}
        onClick={onClick}
      >
        {/* Card header */}
        <div
          className="px-5 md:px-7 py-5 flex items-center justify-between transition-colors duration-300"
          style={{
            background: isActive ? "var(--color-navy-dark)" : "white",
          }}
        >
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3
                className="font-semibold text-base"
                style={{ color: isActive ? "white" : "var(--color-navy-dark)" }}
              >
                {job.role}
              </h3>
              {job.isCurrent && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: "var(--color-gold)", color: "var(--color-navy-dark)" }}
                >
                  Current
                </span>
              )}
            </div>
            <p
              className="text-sm mt-1"
              style={{ color: isActive ? "var(--color-navy-300)" : "var(--color-navy-500)" }}
            >
              <Link
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 transition-colors hover:underline"
                style={{ color: isActive ? "var(--color-gold-light)" : "var(--color-navy-600)" }}
                onClick={(event) => event.stopPropagation()}
              >
                {job.company}
              </Link>{" "}
              · {job.location}
            </p>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <span
              className="text-xs tracking-wide hidden sm:block"
              style={{ color: isActive ? "var(--color-navy-300)" : "var(--color-navy-400)" }}
            >
              {job.period}
            </span>
            <div
              className="transition-transform duration-300"
              style={{ transform: isActive ? "rotate(180deg)" : "rotate(0)" }}
            >
              <ChevronIcon color={isActive ? "var(--color-gold)" : "var(--color-navy-400)"} />
            </div>
          </div>
        </div>

        {/* Expandable body */}
        <div className={`timeline-expand ${isActive ? "open" : ""}`}>
          <div
            className="px-5 md:px-7 py-5 border-t"
            style={{ background: "white", borderColor: "var(--color-navy-50)" }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-navy-600)" }}
            >
              {job.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-sm border"
                  style={{
                    color: "var(--color-navy-600)",
                    background: "var(--color-navy-50)",
                    borderColor: "var(--color-navy-100)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C9.243 2 7 4.243 7 7v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-2.757-2.243-5-5-5zm3 14H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v9zM5 4H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h1V4z" />
    </svg>
  );
}

function ChevronIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 5.5L7 9.5L11 5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
