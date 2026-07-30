const writings = [
  {
    title: "Pell Equations Through Continued Fractions",
    date: "March 2026",
    description:
      "An introduction to the connection between continued fractions and integer solutions of x² − Dy² = 1.",
  },
  {
    title: "Coloring a School Timetable",
    date: "January 2026",
    description:
      "A graph-theoretic model of scheduling, together with the practical limits of the model.",
  },
  {
    title: "When Randomness Proves Existence",
    date: "November 2025",
    description:
      "An elementary introduction to the probabilistic method in combinatorics.",
  },
] as const;

const activities = [
  {
    date: "2025—",
    title: "Student Organizer, Mathematics Circle",
    description:
      "Lead weekly problem sessions and prepare short handouts for students.",
  },
  {
    date: "2024—",
    title: "Independent Reading and Writing",
    description:
      "Study number theory and combinatorics through textbooks, lecture notes, and problem sets.",
  },
  {
    date: "2024—",
    title: "Peer Mathematics Tutor",
    description:
      "Support students in algebra, geometry, and precalculus through a weekly school program.",
  },
] as const;

const handoutGroups = [
  {
    id: "school-handouts",
    label: "School",
    items: [
      {
        title: "Writing Proofs a Reader Can Follow",
        meta: "3 pages · September 2025",
      },
      {
        title: "Functions, Graphs, and Transformations",
        meta: "4 pages · October 2025",
      },
    ],
  },
  {
    id: "olympiad-handouts",
    label: "Olympiad",
    items: [
      {
        title: "Invariants: What Refuses to Change?",
        meta: "4 pages · February 2026",
      },
      {
        title: "A Friendly Introduction to Generating Functions",
        meta: "5 pages · December 2025",
      },
      {
        title: "The Extremal Principle",
        meta: "4 pages · August 2025",
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
              Maya Rao
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
            <h1>Maya Rao</h1>
            <p className="subtitle">
              High school student interested in number theory and
              combinatorics.
            </p>
            <p>
              Hello! I am Maya, a student from Bengaluru. This site contains my
              mathematical writing, school publications, CV, and handouts.
            </p>
            <p className="contact-line">
              <a href="mailto:student@example.com">Email</a>
              <span aria-hidden="true">·</span>
              <a href="#cv">CV</a>
              <span aria-hidden="true">·</span>
              <a href="https://github.com/" rel="noreferrer">
                GitHub
              </a>
            </p>
          </section>

          <section id="writings" className="section">
            <h2>Writings &amp; Publications</h2>

            <h3>Publications</h3>
            <ol className="academic-list">
              <li>
                <p>
                  <span className="item-title">
                    Not All Infinities Are the Same
                  </span>
                  . <em>Northbridge Review of Science &amp; Mathematics</em>,
                  Issue 4, 2025.
                </p>
              </li>
            </ol>

            <h3>Expository Writing</h3>
            <ol className="academic-list">
              {writings.map((writing) => (
                <li key={writing.title}>
                  <p>
                    <span className="item-title">{writing.title}</span>.{" "}
                    {writing.description}{" "}
                    <span className="item-meta">({writing.date})</span>
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section id="cv" className="section">
            <h2>CV</h2>

            <h3>Education</h3>
            <div className="cv-entry">
              <p className="cv-date">2023—27</p>
              <div>
                <h4>Northbridge High School, Bengaluru</h4>
                <p>Expected graduation June 2027.</p>
              </div>
            </div>

            <h3>Mathematical Activities</h3>
            <div className="cv-list">
              {activities.map((activity) => (
                <article className="cv-entry" key={activity.title}>
                  <p className="cv-date">{activity.date}</p>
                  <div>
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3>Selected Coursework</h3>
            <p>
              Multivariable Calculus, Linear Algebra, Elementary Number Theory,
              Algorithms and Data Structures, Physics.
            </p>

            <h3>Technical Tools</h3>
            <p>Python, LaTeX, Git, Java.</p>
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
                        <span className="item-title">{item.title}</span>.{" "}
                        <span className="item-meta">{item.meta}</span>
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
            Maya Rao · Bengaluru, India ·{" "}
            <a href="mailto:student@example.com">student@example.com</a>
          </p>
          <a href="#home">Back to top</a>
        </footer>
      </div>
    </>
  );
}
