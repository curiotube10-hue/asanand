const researchWriting = [
  {
    title:
      "A Geometric Analogue of Bertrand’s Postulate over Imaginary Quadratic Rings",
    description:
      "A research manuscript establishing a geometric Bertrand-type result using prime distribution in annular sectors.",
    meta: "Research draft · August 2026 · 10 pages",
    href: "/pdfs/geometric-bertrand-imaginary-quadratic-rings.pdf",
  },
  {
    title: "The Postage Stamp Problem and Compound Sequences",
    description:
      "In-progress research on compound sequences; made significant progress on an open linear Diophantine problem involving second-order recurrences, under the guidance of Prof. Amitabha Tripathi at IIT Delhi.",
    meta: "In progress · 2026—",
  },
  {
    title: "Additive Bases",
    description:
      "A three-month team research project for ETEAM in Lyon. Represented India on a full scholarship; the team placed second overall.",
    meta: "ETEAM · June 2025",
    href: "https://eteam.tfjm.org/",
  },
] as const;

const honors = [
  {
    date: "2026",
    title: "Indian National Mathematical Olympiad",
    description:
      "INMO Merit Awardee; qualified through IOQM and RMO. Scored 21/102, with a reported median of 2 among 1,071 participants.",
  },
  {
    date: "2026",
    title: "LIMIT, Indian Statistical Institute Bengaluru",
    description:
      "Ranked 15th nationally, selected for the LIMIT Mathematics Camp, and attended in June 2026.",
  },
  {
    date: "2026",
    title: "American Invitational Mathematics Examination",
    description: "Qualified for AIME through the AMC 12 pathway.",
  },
  {
    date: "2026",
    title: "Euclid Mathematics Contest",
    description:
      "Scored 78/100, received a Certificate of Distinction, and placed 1,569th globally.",
  },
  {
    date: "2026",
    title: "Purple Comet! Math Meet",
    description:
      "The team ranked 8th in India out of 60 teams and 98th globally out of 399 teams.",
  },
] as const;

const researchAndPrograms = [
  {
    date: "2026—",
    title: "Postage Stamp Problem Research, IIT Delhi",
    description:
      "Researched the Postage Stamp Problem for compound sequences and made significant progress on an open linear Diophantine problem involving second-order recurrences under Prof. Amitabha Tripathi. Invited to a four-month number theory course at IIT Delhi.",
  },
  {
    date: "2025—",
    title: "Bertrand-Type Bounds in Imaginary Quadratic Rings",
    description:
      "Developing explicit geometric bounds for Bertrand-type questions over rings of integers of imaginary quadratic fields, with guidance from Sagar Srivastava.",
  },
  {
    date: "2025",
    title: "ETEAM, Lyon — Additive Bases",
    description:
      "Represented India with a full scholarship after three months of team research; presented the work and placed second overall.",
  },
  {
    date: "2026",
    title: "Ross Mathematics Program, Otterbein University",
    description:
      "Participant in the summer proof-based mathematics program in Westerville, Ohio.",
  },
  {
    date: "2024—25",
    title: "Lodha Genius Programme, Ashoka University",
    description:
      "Two-year full-scholarship mathematics enrichment program focused on olympiad problem solving; selected through the program for ETEAM.",
  },
] as const;

const handoutGroups = [
  {
    id: "school-handouts",
    label: "School",
    items: [
      {
        title: "What Are Matrices — Really?",
        meta: "3 pages · April 2026",
        href: "/pdfs/what-are-matrices-really.pdf",
      },
      {
        title: "Expansions Using Calculus",
        meta: "4 pages · April 2026",
        href: "/pdfs/expansions-using-calculus.pdf",
      },
    ],
  },
  {
    id: "olympiad-handouts",
    label: "Olympiad",
    items: [
      {
        title: "Basic Inequalities in Olympiad Problems",
        meta: "6 pages · June 2025",
        href: "/pdfs/basic-inequalities-olympiad.pdf",
      },
      {
        title: "Complex Bash",
        meta: "9 pages · August 2026",
        href: "/pdfs/complex-bash.pdf",
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="page">
        <header className="site-header">
          <div className="header-row">
            <a className="site-name" href="#home">
              Adhiraj Singh Anand
            </a>

            <nav className="primary-nav" aria-label="Primary navigation">
              <a href="#home">Home</a>
              <a href="#writings">Writings &amp; Publications</a>
              <a href="#cv">CV</a>
              <details className="nav-disclosure">
                <summary>Handouts</summary>
                <ul>
                  <li>
                    <a href="#school-handouts">School</a>
                  </li>
                  <li>
                    <a href="#olympiad-handouts">Olympiad</a>
                  </li>
                </ul>
              </details>
            </nav>
          </div>
        </header>

        <main id="main-content">
          <section id="home" className="section home-section">
            <h1>Adhiraj Singh Anand</h1>
            <p className="subtitle">
              Grade 12G student at Delhi Public School R.K. Puram interested in
              number theory, combinatorics, and olympiad mathematics.
            </p>
            <p>
              I am a high school student based in Gurugram, India. My current
              work concerns compound sequences, linear Diophantine problems
              arising from second-order recurrences, and Bertrand-type bounds
              in imaginary quadratic integer rings.
            </p>
            <p className="contact-line">
              <a href="mailto:curiotube10@gmail.com">Email</a>
              <span aria-hidden="true">·</span>
              <a href="tel:+919319600311">+91 93196 00311</a>
              <span aria-hidden="true">·</span>
              <a href="#cv">CV</a>
            </p>
          </section>

          <section id="writings" className="section">
            <h2>Writings &amp; Publications</h2>

            <h3>Research &amp; Manuscripts</h3>
            <ol className="academic-list">
              {researchWriting.map((writing) => (
                <li key={writing.title}>
                  <p>
                    {"href" in writing ? (
                      <a className="item-title" href={writing.href}>
                        {writing.title}
                      </a>
                    ) : (
                      <span className="item-title">{writing.title}</span>
                    )}
                    . {writing.description}{" "}
                    <span className="item-meta">({writing.meta})</span>
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section id="cv" className="section">
            <h2>CV</h2>

            <h3>Education</h3>
            <div className="cv-list">
              <article className="cv-entry">
                <p className="cv-date">2025—27</p>
                <div>
                  <h4>Delhi Public School R.K. Puram, New Delhi</h4>
                  <p>CBSE, Grade 12G; expected graduation 2027.</p>
                </div>
              </article>
              <article className="cv-entry">
                <p className="cv-date">2014—25</p>
                <div>
                  <h4>Heritage Xperiential Learning School, Gurugram</h4>
                  <p>Primary and secondary education.</p>
                </div>
              </article>
            </div>

            <h3>Academic Record</h3>
            <ul className="plain-list">
              <li>CBSE Class XI: 89.6% aggregate.</li>
              <li>
                CBSE Class X: 94.8% aggregate; Mathematics 100/100, French
                99/100, and Science 97/100.
              </li>
              <li>SAT: 1520, including 790 in Mathematics.</li>
              <li>
                AP Calculus BC: 5; AP Physics C: Mechanics: 5; AP Statistics:
                4.
              </li>
            </ul>

            <h3>Mathematics Competitions &amp; Honors</h3>
            <div className="cv-list">
              {honors.map((honor) => (
                <article className="cv-entry" key={honor.title}>
                  <p className="cv-date">{honor.date}</p>
                  <div>
                    <h4>{honor.title}</h4>
                    <p>{honor.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3>Research &amp; Mathematical Programs</h3>
            <div className="cv-list">
              {researchAndPrograms.map((item) => (
                <article className="cv-entry" key={item.title}>
                  <p className="cv-date">{item.date}</p>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3>School Activities</h3>
            <ul className="plain-list">
              <li>
                <strong>MatSoc, DPS R.K. Puram.</strong> Participated in
                problem-solving sessions, prepared notes on complex bashing and
                inequalities, and represented the school at interschool
                competitions.
              </li>
              <li>
                <strong>School Cricket Team.</strong> Fast bowler for Heritage
                Xperiential Learning School.
              </li>
            </ul>

            <h3>Technical Tools</h3>
            <p>LaTeX, Python, SageMath.</p>

            <h3>Additional</h3>
            <p>
              DELF B1 French certification. Other interests include Rubik’s
              Cube, programming, and GeoGuessr.
            </p>
          </section>

          <section id="handouts" className="section">
            <h2>Handouts</h2>

            {handoutGroups.map((group) => (
              <section
                id={group.id}
                className="handout-group"
                aria-labelledby={`${group.id}-title`}
                key={group.id}
              >
                <h3 id={`${group.id}-title`}>{group.label}</h3>
                <ol className="academic-list resource-list">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <p>
                        <a className="item-title" href={item.href}>
                          {item.title}
                        </a>
                        . <span className="item-meta">{item.meta}</span>{" "}
                        <span className="file-label">PDF</span>
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </section>
        </main>

        <footer className="site-footer">
          <p>
            Adhiraj Singh Anand · Gurugram, India ·{" "}
            <a href="mailto:curiotube10@gmail.com">
              curiotube10@gmail.com
            </a>
          </p>
          <a href="#home">Back to top</a>
        </footer>
      </div>
    </>
  );
}
