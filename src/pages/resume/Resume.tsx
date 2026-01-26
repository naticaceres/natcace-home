import styles from "./Resume.module.scss";

const highlights = [
  "10+ years building scalable front-end platforms across fintech, SaaS, and enterprise domains.",
  "Grew test coverage from 20% to 60% in 2 months through unit, integration, and E2E strategy.",
  "Delivered systems processing 5M records/day with non-blocking UX.",
  "Led teams of up to 10 engineers through high-pressure, high-impact releases.",
];

const skills = [
  {
    title: "Front End",
    items:
      "Angular (10–21), React 18, Nx, RxJS, NgRx, Redux, Webpack, ESBuild, HTML, SCSS",
  },
  {
    title: "Back End",
    items: "C#, .NET microservices, Kafka, ElasticSearch, GraphQL",
  },
  {
    title: "Data",
    items: "MySQL, MongoDB, PostgreSQL",
  },
  {
    title: "Infra",
    items: "Nginx, Google Web Server, Microsoft IIS",
  },
];

const experience = [
  {
    role: "Senior Front End Developer",
    company: "Questrade",
    location: "Toronto, Canada",
    period: "Sep 2023 – Present",
    highlights: [
      "Coordinated an eventually consistent backend with a responsive UI strategy to keep user state accurate and fast.",
      "Implemented end-to-end testing and reporting with Cypress, Mochawesome, and Azure Pipelines.",
      "Led a 10-person team to deliver a time-critical feature that used existing applications while improving test coverage and reusability.",
    ],
    stack:
      "JavaScript, Angular 16, Nx, RxJS, Webpack, Azure Pipelines, C#, .NET microservices",
  },
  {
    role: "Front End Tech Lead & Manager",
    company: "SAVVYY",
    location: "Toronto, Canada",
    period: "Feb 2021 – Sep 2023",
    highlights: [
      "Managed and mentored a 7-person team; ran performance reviews and supported hiring.",
      "Replaced manual testing with a blended unit/integration + E2E strategy, raising coverage from 20% to 60% in 2 months.",
      "Migrated auth to OAuth 2.0 with RBAC for a white-label product used by 4 customers.",
    ],
    stack:
      "JavaScript, Angular 15, Nx, RxJS, HTML, SCSS, Webpack, Azure Pipelines, C#, .NET microservices",
  },
  {
    role: "Front End Tech Lead & UX Designer",
    company: "SeedNext",
    location: "Remote",
    period: "2019 – Feb 2021",
    highlights: [
      "Defined critical user journeys for three prototypes (one scaled to production) across IoT/AI, form builder, and toll management projects.",
      "Partnered with UX, BA, and CFO to scope, budget, and deliver proposals with clear progress reporting.",
      "Led hiring and front-end delivery across all company projects.",
    ],
    stack:
      "JavaScript, Angular 13, React, Nx, RxJS, NgRx, Redux, HTML, SCSS, AWS Lambda, Amazon QLDB, MQTT, ElasticSearch, Kafka, Kibana",
  },
  {
    role: "Front End Tech Lead",
    company: "SeamGroup / Vates",
    location: "Remote",
    period: "2018 – 2019",
    highlights: [
      "Built a web-based CAD PWA for viewing and editing drawings offline with sync on reconnect.",
      "Designed and delivered a system processing 5M toll records/day with non-blocking UX for search, filtering, and edits.",
    ],
    stack:
      "JavaScript, React, Redux, D3, Express, Webpack, HTML, CSS, .NET Framework 4.7.2",
  },
  {
    role: "Senior Front End Developer",
    company: "Open English",
    location: "Buenos Aires, Argentina",
    period: "2017 – 2018",
    highlights: [
      "Expanded the learning platform to support 3 additional languages (Italian, French, Portuguese).",
      "Added animations and transitions that increased user permanence by 15%.",
      "Grew automated tests to 90% coverage for the student portal.",
    ],
    stack: "JavaScript, Angular 10, RxJS, HTML, SCSS, CSS, Webpack, SQL",
  },
];

const additionalExperience = [
  "Full Stack Semi-Senior Engineer — Subway Franchisee HQ (CME), Remote (2016 – 2018)",
  "Full Stack Semi-Senior Engineer — Kantar Group (CME), Remote (2016 – 2017)",
  "Full Stack Engineer — iVisa, Mendoza, Argentina (2014 – 2016)",
  "Junior Developer / Business Analyst — Hospital Español, Mendoza, Argentina (2013 – 2014)",
];

const education = [
  {
    title: "Systems Engineering (BSE)",
    school: "Universidad Tecnológica Nacional",
    location: "Mendoza, Argentina",
    period: "2010 – 2017",
    detail: "Incomplete, pending final exams.",
  },
  {
    title: "Multimedia Design (Certificate)",
    school: "Universidad Champagnat",
    location: "Mendoza, Argentina",
    period: "2010",
  },
];

const activities = [
  "NGGirls Mentor, NGConf (2022)",
  "Videocast Co-Host, Angular Nation / Angular Americas (2021 – 2023)",
];

export function Resume() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Front End Staff Engineer • Technical Lead</p>
          <h1 className={styles.title}>Natalia Caceres</h1>
          <p className={styles.subtitle}>
            Building high-impact, scalable front-end platforms with a focus on
            performance, reliability, and team growth.
          </p>
          <div className={styles.heroMeta}>
            <span>Toronto, Canada</span>            
            <span>nataliacaceres91@gmail.com</span>
          </div>
          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={handlePrint}>
              Download PDF
            </button>
          </div>
          <div className={styles.profileLinks}>
            <a href="https://www.linkedin.com/in/natalia-caceres/" target="_blank" rel="noreferrer">
              linkedin.com/in/natalia-caceres
            </a>
            <span>•</span>
            <a href="https://github.com/naticaceres" target="_blank" rel="noreferrer">
              github.com/naticaceres
            </a>
          </div>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroCardTop}>
            <span>Leadership</span>
            <span>Quality</span>
            <span>Architecture</span>
          </div>
          <div className={styles.heroCardBody}>
            <h2>Highlights</h2>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.glowOrb} />
        <div className={styles.glowOrbAlt} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Core Skills</h2>
          <p>Focused on modern, scalable front-end ecosystems and testing excellence.</p>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <article key={skill.title} className={styles.skillCard}>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Experience</h2>
          <p>Delivery, mentoring, and high-leverage architecture across global teams.</p>
        </div>
        <div className={styles.timeline}>
          {experience.map((role) => (
            <article key={`${role.company}-${role.period}`} className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3>{role.role}</h3>
                  <p className={styles.company}>
                    {role.company} • {role.location}
                  </p>
                </div>
                <span className={styles.period}>{role.period}</span>
              </div>
              <ul>
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.stack}>
                <strong>Tech:</strong> {role.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Additional Experience</h2>
          <p>Earlier roles that shaped the foundation for today’s leadership.</p>
        </div>
        <ul className={styles.simpleList}>
          {additionalExperience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.sectionSplit}>
        <div className={styles.sectionCard}>
          <h2>Education</h2>
          <ul>
            {education.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>
                  {item.school} • {item.location}
                </p>
                <span>{item.period}</span>
                {item.detail && <em>{item.detail}</em>}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionCard}>
          <h2>Additional Activities</h2>
          <ul>
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
