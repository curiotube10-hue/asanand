const navigation = [
  { label: "Home", href: "#home", number: "00" },
  {
    label: "Writings & Publications",
    href: "#writings",
    number: "01",
  },
  { label: "CV", href: "#cv", number: "02" },
  { label: "Handouts", href: "#handouts", number: "03" },
] as const;

const interests = [
  "Continued fractions & Diophantine equations",
  "Extremal and probabilistic combinatorics",
  "Graph algorithms & mathematical modeling",
  "Proof design & mathematical exposition",
] as const;

const writings = [
  {
    index: "W.01",
    kind: "Expository paper",
    date: "March 2026",
    pages: "8 pages",
    title: "Pell Equations Through Continued Fractions",
    summary:
      "Why do the convergents of √D produce unusually good rational approximations—and how does that lead to integer solutions of x² − Dy² = 1?",
    detail:
      "The note builds the connection from examples, proves the central recurrence, and closes with a short computational investigation. Written for readers comfortable with proof by induction.",
    topics: ["Number theory", "Recurrences", "Python"],
    featured: true,
  },
  {
    index: "W.02",
    kind: "Modeling note",
    date: "January 2026",
    pages: "6 pages",
    title: "Coloring a School Timetable",
    summary:
      "Courses become vertices, conflicts become edges, and time slots become colors. The simple model is useful precisely because its limitations are visible.",
    detail:
      "This exploration tests a greedy coloring strategy on a small anonymized dataset, then examines the practical constraints that ordinary graph coloring does not express.",
    topics: ["Graph theory", "Algorithms", "Modeling"],
    featured: false,
  },
  {
    index: "W.03",
    kind: "Expository essay",
    date: "November 2025",
    pages: "7 pages",
    title: "When Randomness Proves Existence",
    summary:
      "A first encounter with the probabilistic method: proving that an object must exist without constructing a single example.",
    detail:
      "Beginning with coin flips and subsets, the essay develops an elementary existence argument and reflects on the gap between finding an object and knowing one must be present.",
    topics: ["Combinatorics", "Probability", "Existence"],
    featured: false,
  },
] as const;

const cvGroups = [
  {
    title: "Education",
    entries: [
      {
        date: "2023—27",
        title: "Northbridge High School, Bengaluru",
        detail:
          "Expected graduation June 2027. Advanced study in mathematics, computer science, and physics.",
      },
    ],
  },
  {
    title: "Mathematical activities",
    entries: [
      {
        date: "2025—",
        title: "Student organizer, Mathematics Circle",
        detail:
          "Lead weekly problem sessions, write short handouts, and help run an annual middle-school problem-solving afternoon.",
      },
      {
        date: "2024—",
        title: "Independent reading and writing",
        detail:
          "Study number theory and combinatorics through textbooks, lecture notes, and problem sets; write expository notes to make proofs more precise.",
      },
      {
        date: "2024—",
        title: "Peer mathematics tutor",
        detail:
          "Support students in algebra, geometry, and precalculus through a weekly school program.",
      },
    ],
  },
] as const;

const handouts = [
  {
    index: "H.01",
    title: "Invariants: What Refuses to Change?",
    meta: "Math circle · 4 pages · Feb 2026",
    description:
      "Parity, coloring, and preserved quantities turn complicated processes into short arguments.",
    outline:
      "Eight problems arranged in three stages, optional hints, and complete solutions. Suitable for students with contest-math experience.",
    tags: ["Problems", "Hints", "Solutions"],
  },
  {
    index: "H.02",
    title: "A Friendly Introduction to Generating Functions",
    meta: "Workshop · 5 pages · Dec 2025",
    description:
      "Build generating functions from counting sequences, then use them on a recurrence and a coin-change problem.",
    outline:
      "Assumes only comfort with algebra. Includes two worked examples, five exercises, and a one-page solution sketch.",
    tags: ["Counting", "Recurrences", "Exercises"],
  },
  {
    index: "H.03",
    title: "Writing Proofs a Reader Can Follow",
    meta: "Peer workshop · 3 pages · Sep 2025",
    description:
      "A practical guide to assumptions, notation, induction, contradiction, and revision.",
    outline:
      "Uses before-and-after examples to show how a correct argument becomes a clear one. Designed to be useful without a lecture.",
    tags: ["Proofs", "Exposition", "Examples"],
  },
] as const;

function SectionHeading({
  number,
  eyebrow,
  title,
  intro,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="section-heading">
      <p className="section-index" aria-hidden="true">
        §{number}
      </p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-intro">{intro}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="site-shell">
        <aside className="spine">
          <div className="identity">
            <a className="monogram" href="#home" aria-label="Maya Rao, home">
              M<span aria-hidden="true">·</span>R
            </a>
            <div>
              <p className="student-name">Maya Rao</p>
              <p className="student-meta">
                Mathematics portfolio
                <br />
                Class of 2027
              </p>
            </div>
          </div>

          <nav className="primary-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                <span aria-hidden="true">§{item.number}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="spine-footer">
            <p className="demo-label">Demo profile · ready to personalize</p>
            <a href="#contact">Bengaluru, India</a>
            <a href="mailto:student@example.com">student@example.com</a>
          </div>
        </aside>

        <main id="main-content">
          <section id="home" className="section hero-section">
            <div className="hero-grid" aria-hidden="true" />
            <p className="section-index hero-index" aria-hidden="true">
              §00
            </p>

            <div className="hero-copy">
              <p className="eyebrow">Student mathematician · problem solver</p>
              <h1>
                A small pattern is an invitation to ask{" "}
                <em>why.</em>
              </h1>
              <p className="hero-lead">
                I’m a high school student drawn to number theory,
                combinatorics, and the moment an experiment becomes a proof. I
                write to understand ideas twice: first for myself, then for a
                reader.
              </p>

              <div className="hero-actions" aria-label="Featured destinations">
                <a className="primary-link" href="#writings">
                  Read selected work <span aria-hidden="true">↓</span>
                </a>
                <a className="quiet-link" href="#cv">
                  View academic CV
                </a>
              </div>
            </div>

            <div className="home-lower">
              <div className="interest-ledger">
                <p className="mini-heading">Currently exploring</p>
                <ol>
                  {interests.map((interest, index) => (
                    <li key={interest}>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {interest}
                    </li>
                  ))}
                </ol>
              </div>

              <aside className="proof-card" aria-label="Working principle">
                <p className="proof-label">Working principle</p>
                <p className="proof-statement">
                  If a pattern survives every example, ask what structure is
                  protecting it.
                </p>
                <div className="proof-sequence" aria-hidden="true">
                  1, 1, 2, 3, 5, 8, …
                </div>
                <p className="qed" aria-label="End of statement">
                  ∎
                </p>
              </aside>
            </div>
          </section>

          <section id="writings" className="section">
            <SectionHeading
              number="01"
              eyebrow="Selected work"
              title="Writings & Publications"
              intro="Expository projects developed from questions in class, math circle, and independent reading. Each piece is written for an advanced high-school reader."
            />

            <div className="bibliography">
              {writings.map((writing) => (
                <article
                  className={
                    writing.featured
                      ? "writing-entry writing-entry-featured"
                      : "writing-entry"
                  }
                  key={writing.index}
                >
                  <div className="entry-number" aria-hidden="true">
                    {writing.index}
                  </div>
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span>{writing.kind}</span>
                      <span>{writing.date}</span>
                      <span>{writing.pages}</span>
                    </div>
                    <h3>{writing.title}</h3>
                    <p>{writing.summary}</p>
                    <div className="topic-list" aria-label="Topics">
                      {writing.topics.map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                    <details>
                      <summary>Read abstract</summary>
                      <p>{writing.detail}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>

            <div className="publication-block">
              <div className="subsection-label">
                <p>School publication</p>
                <span aria-hidden="true">— ∴ —</span>
              </div>
              <article className="publication-entry">
                <div>
                  <p className="entry-meta">
                    Northbridge Review of Science & Mathematics · Issue 4 ·
                    2025
                  </p>
                  <h3>Not All Infinities Are the Same</h3>
                </div>
                <p>
                  A short article introducing countability through Hilbert’s
                  hotel, diagonal arguments, and the difference between the
                  integers and real numbers. Edited with the magazine’s faculty
                  adviser.
                </p>
              </article>
              <p className="status-note">
                <span>Note on status.</span> Unless stated otherwise, work on
                this page is student exposition—not peer-reviewed research.
                Dates indicate the most recent revision.
              </p>
            </div>
          </section>

          <section id="cv" className="section">
            <SectionHeading
              number="02"
              eyebrow="Curriculum vitae"
              title="CV"
              intro="A concise record of coursework, mathematical work, teaching, and the habits that support independent study."
            />

            <div className="cv-toolbar">
              <p>
                Maya Rao · Bengaluru, India ·{" "}
                <a href="mailto:student@example.com">student@example.com</a>
              </p>
              <a className="quiet-link" href="#contact">
                Request one-page PDF
              </a>
            </div>

            <div className="cv-layout">
              <div className="cv-main">
                {cvGroups.map((group) => (
                  <section className="cv-group" key={group.title}>
                    <h3>{group.title}</h3>
                    {group.entries.map((entry) => (
                      <article className="cv-entry" key={entry.title}>
                        <p className="cv-date">{entry.date}</p>
                        <div>
                          <h4>{entry.title}</h4>
                          <p>{entry.detail}</p>
                        </div>
                      </article>
                    ))}
                  </section>
                ))}
              </div>

              <aside className="cv-rail" aria-label="Skills and coursework">
                <div>
                  <h3>Selected study</h3>
                  <ul>
                    <li>Multivariable calculus</li>
                    <li>Linear algebra</li>
                    <li>Elementary number theory</li>
                    <li>Algorithms & data structures</li>
                    <li>Mechanics & electromagnetism</li>
                  </ul>
                </div>
                <div>
                  <h3>Tools</h3>
                  <p>Python · LaTeX · Git · Java</p>
                </div>
                <div>
                  <h3>Beyond math</h3>
                  <p>Classical piano · Distance running · Science journalism</p>
                </div>
              </aside>
            </div>
          </section>

          <section id="handouts" className="section">
            <SectionHeading
              number="03"
              eyebrow="Teaching materials"
              title="Handouts"
              intro="Resources prepared for math-circle sessions and peer workshops. Each is designed to remain useful after the room is empty."
            />

            <div className="handout-list">
              {handouts.map((handout) => (
                <article className="handout-entry" key={handout.index}>
                  <div className="handout-index" aria-hidden="true">
                    {handout.index}
                  </div>
                  <div className="handout-copy">
                    <p className="entry-meta">{handout.meta}</p>
                    <h3>{handout.title}</h3>
                    <p>{handout.description}</p>
                    <details>
                      <summary>View outline</summary>
                      <p>{handout.outline}</p>
                    </details>
                  </div>
                  <div className="handout-tags" aria-label="Included materials">
                    {handout.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="reuse-note">
              <p className="mini-heading">Reuse & corrections</p>
              <p>
                Students and teachers may use these handouts for noncommercial
                educational purposes with attribution. Corrections and
                suggestions are always welcome.
              </p>
            </aside>
          </section>

          <footer id="contact" className="site-footer">
            <div>
              <p className="footer-name">Maya Rao</p>
              <p>Mathematics portfolio · Class of 2027</p>
            </div>
            <div className="footer-links">
              <a href="mailto:student@example.com">Email</a>
              <a href="https://github.com/" rel="noreferrer">
                GitHub
              </a>
              <a href="#home">Back to top ↑</a>
            </div>
            <p className="colophon">
              Set in Georgia and system mono. Built with paper, ink, and a
              stubborn preference for clear proofs.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
