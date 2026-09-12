import CvDisclosure from "./cv-disclosure";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicUrl = (path: string) => `${basePath}${path}`;

function InlineMath({ children }: { children: string }) {
  return (
    <span className="math-tex" data-latex={children}>
      {`\\(${children}\\)`}
    </span>
  );
}

const researchWriting = [
  {
    title:
      "An Asymptotic Geometric Analogue of Bertrand’s Postulate in Imaginary Quadratic Rings",
    description:
      "Authored a mathematical manuscript examining Bertrand-type prime-existence questions in imaginary quadratic rings. Developed a geometric result using asymptotic angular distribution of prime elements under a thickness condition; work developed with guidance from Dr. Sagar Shrivastava, Postdoctoral Research Associate at Iowa State University.",
    meta: "2025–present · Manuscript under review, Rose-Hulman Undergraduate Mathematics Journal",
    href: publicUrl("/pdfs/geometric-bertrand-imaginary-quadratic-rings.pdf"),
    abstract: (
      <>
        Bertrand’s postulate asserts that for every{" "}
        <InlineMath>{"n > 1"}</InlineMath>, there exists a rational prime{" "}
        <InlineMath>p</InlineMath> with <InlineMath>{"n < p < 2n"}</InlineMath>.
        Fixing an integral basis <InlineMath>{"(1,\\tau)"}</InlineMath>, we
        define a region{" "}
        <InlineMath>{"B_{\\tau}(\\alpha,(1+c)\\alpha)"}</InlineMath> using
        coordinate-wise inequalities and norm bounds. Under a thickness
        condition preventing the normalized basis coordinates of{" "}
        <InlineMath>{"\\alpha"}</InlineMath> from approaching either coordinate
        axis, we prove that{" "}
        <InlineMath>{"B_{\\tau}(\\alpha,(1+c)\\alpha)"}</InlineMath> contains a
        prime element for large enough <InlineMath>{"N(\\alpha)"}</InlineMath>.
        The proof identifies an annular sector of uniform angular and radial
        width in the scaled region and applies an asymptotic angular prime
        distribution theorem for imaginary quadratic rings.
      </>
    ),
  },
  {
    title: "Apéry Kunz Theory for numerical semigroups of fixed multiplicity",
    description:
      "Developed a general framework for classifying symmetric and pseudo-symmetric numerical semigroups of any fixed multiplicity, refining by frobenius number modulo multiplicity, embedding dimension and minimal generating set. Authored a manuscript establishing finite algorithmic classifications and conductor-counting formulas, with explicit classifications at multiplicities 6 and 7 developed using AI-assisted symbolic exploration and computation, followed by independent computational verification. Mentored by Dr. Amitabha Tripathi, Professor of Mathematics at IIT Delhi.",
    meta: "2026-present",
  },
  {
    title: "Additive Bases in Number Theory - ETEAM, Lyon",
    description:
      "Collaborated for more than three months on constructions and properties of additive bases and presented the team's findings at the international tournament. Investigated the finiteness of the order of additive basis, including polynomials, powers of t, and first and second order linear recurrences. Subsequently mentored candidates and selected the next ETEAM team through Ashoka University.",
    meta: "2025",
    abstract: (
      <>
        This problem is set in an infinitely tall building, with our
        protagonists Alice and Bob on the ground floor and the{" "}
        <InlineMath>N</InlineMath>th floor, respectively. Alice can board a lift
        and go up <InlineMath>{"a_i"}</InlineMath> floors, where{" "}
        <InlineMath>{"a_i \\in A"}</InlineMath>. The problem revolves around
        approximating the function <InlineMath>{"d_A(N)"}</InlineMath>, which
        measures the minimum number of steps Alice must take to reach Bob. We
        find global bounds on <InlineMath>{"d_A(N)"}</InlineMath>, approximate
        it for finite <InlineMath>A</InlineMath>, determine when it is
        unbounded, investigate <InlineMath>{"d_{A_t}(N)"}</InlineMath>, consider{" "}
        <InlineMath>A</InlineMath> as the set of Fibonacci numbers, and suggest
        and explore research directions.
      </>
    ),
    resources: [
      {
        label: "Strange Lifts — report",
        detail: "14 pages",
        href: publicUrl("/pdfs/eteam-2025-strange-lifts-report.pdf"),
        type: "PDF",
      },
      {
        label: "Strange Lifts — presentation",
        detail: "15 slides",
        href: publicUrl("/pdfs/eteam-2025-strange-lifts-presentation.pdf"),
        type: "PDF",
      },
      {
        label: "ETEAM website",
        href: "https://eteam.tfjm.org/",
        type: "Website",
      },
    ],
  },
  {
    title: "Formalisation of Topology in Lean",
    description:
      "Collaborated for more than four months to contribute formal proofs of the Lebesgue number lemma, real line dimension not being zero, and covering dimension in Lean’s Math Library.",
    meta: "2025-26",
  },
] as const;

const honors = [
  {
    date: "2026",
    title: "Indian National Mathematical Olympiad (INMO)",
    description:
      "Qualified for INMO through IOQM and RMO; attended the INMO training camp; scored 21/102 at the national stage (median score: 2; 1,071 participants).",
  },
  {
    date: "2026",
    title: "LIMIT, Indian Statistical Institute, Bangalore",
    description:
      "Ranked 15th nationally, selected for the LIMIT Mathematics Camp, and attended in June 2026.",
  },
  {
    date: "2026",
    title: "American Invitational Mathematics Examination (AIME)",
    description:
      "Qualified for and participated in AIME after scoring 96/150 in AMC 12A.",
  },
  {
    date: "2026",
    title: "Euclid Mathematics Contest",
    description:
      "Scored 78/100; ranked 1,569 globally among 23,985 contestants; received a Certificate of Distinction.",
  },
  {
    date: "2025",
    title:
      "European Tournament of Enthusiastic Apprentice Mathematicians (ETEAM), Lyon",
    description:
      "Represented India on a full scholarship; team placed 2nd overall.",
  },
  {
    date: "2025",
    title: "Purple Comet Mathematics Competition",
    description:
      "Team ranked 8th in India (of 60 teams) and 98th globally (of 399 teams).",
  },
] as const;

const researchAndExposition = [
  {
    date: "2025–present",
    title:
      "An Asymptotic Geometric Analogue of Bertrand’s Postulate in Imaginary Quadratic Rings",
    subline:
      "Manuscript under review, Rose-Hulman Undergraduate Mathematics Journal",
    bullets: [
      "Authored a mathematical manuscript examining Bertrand-type prime-existence questions in imaginary quadratic rings.",
      "Developed a geometric result using asymptotic angular distribution of prime elements under a thickness condition; work developed with guidance from Dr. Sagar Shrivastava, Postdoctoral Research Associate at Iowa State University.",
    ],
  },
  {
    date: "2026-present",
    title: "Apéry Kunz Theory for numerical semigroups of fixed multiplicity",
    bullets: [
      "Developed a general framework for classifying symmetric and pseudo-symmetric numerical semigroups of any fixed multiplicity, refining by frobenius number modulo multiplicity, embedding dimension and minimal generating set.",
      "Authored a manuscript establishing finite algorithmic classifications and conductor-counting formulas, with explicit classifications at multiplicities 6 and 7 developed using AI-assisted symbolic exploration and computation, followed by independent computational verification. Mentored by Dr. Amitabha Tripathi, Professor of Mathematics at IIT Delhi.",
    ],
  },
  {
    date: "2025",
    title: "Additive Bases in Number Theory - ETEAM, Lyon",
    bullets: [
      "Collaborated for more than three months on constructions and properties of additive bases and presented the team's findings at the international tournament.",
      "Investigated the finiteness of the order of additive basis, including polynomials, powers of t, and first and second order linear recurrences.",
      "Subsequently mentored candidates and selected the next ETEAM team through Ashoka University.",
    ],
  },
  {
    date: "2025-26",
    title: "Formalisation of Topology in Lean",
    bullets: [
      "Collaborated for more than four months to contribute formal proofs of the Lebesgue number lemma, real line dimension not being zero, and covering dimension in Lean’s Math Library.",
    ],
  },
] as const;

const mathematicsPrograms = [
  {
    date: "Summer 2026",
    title: "Ross Mathematics Program, Otterbein University, Ohio",
    bullets: [
      "Completed a six-week intensive program centered on number theory, proof-writing and collaborative problem solving; took advanced courses in Elliptic Curves, Point-Set Topology, and the Normal Distribution; delivered a guest lecture on the Postage Stamp Problem.",
    ],
  },
  {
    date: "2024–2025",
    title: "Lodha Genius Program, Ashoka University",
    bullets: [
      "Received a full scholarship for two years of advanced mathematics, including number theory, combinatorics, geometry, group theory and quadratic fields.",
      "Selected through the program to represent India at ETEAM; developed a mathematical exposition on splitting, inertia, and ramification in quadratic fields.",
    ],
  },
] as const;

const mathematicalCommunity = [
  {
    title: "MatSoc, Delhi Public School R.K. Puram",
    bullets: [
      "Participated in weekly problem-solving sessions; prepared notes and problem sets on complex-coordinate geometry, inequalities and functional equations.",
    ],
  },
  {
    date: "2026-present",
    title: "Math Circles, Cheenta",
    bullets: [
      "Led over 12 problem-solving sessions with students, focusing on an AMC level warm-up and a previous TC or SL problem afterwards. Helped at least 5 people qualify for the regional math Olympiad.",
    ],
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
        href: publicUrl("/pdfs/what-are-matrices-really.pdf"),
      },
      {
        title: "Expansions Using Calculus",
        meta: "4 pages · April 2026",
        href: publicUrl("/pdfs/expansions-using-calculus.pdf"),
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
        href: publicUrl("/pdfs/basic-inequalities-olympiad.pdf"),
      },
      {
        title: "Complex Bash",
        meta: "9 pages · August 2026",
        href: publicUrl("/pdfs/complex-bash.pdf"),
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
            <div className="home-profile">
              <div>
                <h1>Adhiraj Singh Anand</h1>
                <p>
                  Hello! I am Adhiraj Singh Anand, a high school student based
                  in Gurugram. I&apos;m broadly interested in Number Theory.
                </p>
                <p>
                  My current work revolves around the Frobenius coin and
                  Postage Stamp problems, and some Algebraic number theory.
                </p>
                <p>
                  When I&apos;m not doing math, I love cubing (3x3, 5x5 and FMC)
                  and playing Geoguessr.
                </p>
                <p className="contact-line">
                  <a href="tel:+919319600311">+91 93196 00311</a>
                  <span aria-hidden="true">·</span>
                  <a href="mailto:curiotube10@gmail.com">
                    curiotube10@gmail.com
                  </a>
                  <span aria-hidden="true">·</span>
                  <a href="#cv">CV</a>
                </p>
              </div>
              <img
                className="portrait"
                src={publicUrl("/adhiraj-singh-anand.png")}
                alt="Adhiraj Singh Anand"
                width="1069"
                height="1471"
              />
            </div>

            <aside className="math-joke" aria-labelledby="math-joke-title">
              <p id="math-joke-title" className="joke-title">
                My paltry attempt at a mathematical joke
              </p>
              <p>
                <strong>Number Theorist:</strong> “I just spent ten years and a
                global network of supercomputers to discover a new
                40-million-digit Mersenne prime!”
              </p>
              <p>
                <strong>Group Theorist:</strong> “Who cares? Up to isomorphism,
                it generates the exact same cyclic group as the number 3.”
              </p>
            </aside>
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
                  {"resources" in writing ? (
                    <ul className="resource-links">
                      {writing.resources.map((resource) => (
                        <li key={resource.href}>
                          <a href={resource.href}>{resource.label}</a>
                          {"detail" in resource ? (
                            <span className="item-meta">
                              {" "}
                              · {resource.detail}
                            </span>
                          ) : null}{" "}
                          <span className="file-label">{resource.type}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {"abstract" in writing ? (
                    <details className="abstract-disclosure">
                      <summary>Abstract</summary>
                      <div className="abstract-body">
                        <p>{writing.abstract}</p>
                      </div>
                    </details>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          <CvDisclosure>
            <div className="cv-heading">
              <h3 className="cv-person-name">ADHIRAJ SINGH ANAND</h3>
              <p className="cv-contact-line">
                <span>Gurgaon, India</span>
                <span aria-hidden="true">|</span>
                <a href="tel:+919319600311">+91 93196 00311</a>
                <span aria-hidden="true">|</span>
                <a href="mailto:curiotube10@gmail.com">
                  curiotube10@gmail.com
                </a>
                <span aria-hidden="true">|</span>
                <a href="https://curiotube10-hue.github.io/asanand/">
                  Mathematics Portfolio
                </a>
              </p>
            </div>

            <h3>EDUCATION</h3>
            <div className="cv-list">
              <article className="cv-entry">
                <p className="cv-date">Expected May 2027</p>
                <div>
                  <h4>Delhi Public School, R.K. Puram, New Delhi</h4>
                  <p>CBSE Class XII, expected May 2027</p>
                  <p>
                    Mathematics, Physics, Chemistry, Computer Science, English
                    &amp; French
                  </p>
                  <p>CBSE Class XI (2026): 89.6% aggregate.</p>
                </div>
              </article>
              <article className="cv-entry">
                <p className="cv-date">2025</p>
                <div>
                  <h4>Heritage Xperiential Learning School, Gurgaon</h4>
                  <p>CBSE Class X, 2025</p>
                  <p>
                    94.8% aggregate; Mathematics 100/100, French 99/100 and
                    Science 97/100
                  </p>
                </div>
              </article>
            </div>

            <h4 className="cv-testing-title">Academic testing:</h4>
            <ul className="plain-list">
              <li>SAT 1540 (790 Math, 750 Reading and Writing)</li>
              <li>
                AP Calculus BC: 5; AP Physics C: Mechanics: 5; AP Statistics:
                4.
              </li>
            </ul>

            <h3>MATHEMATICAL HONORS &amp; COMPETITIONS</h3>
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

            <h3>RESEARCH &amp; MATHEMATICAL EXPOSITION</h3>
            <div className="cv-list">
              {researchAndExposition.map((item) => (
                <article className="cv-entry" key={item.title}>
                  <p className="cv-date">{item.date}</p>
                  <div>
                    <h4>{item.title}</h4>
                    {"subline" in item ? (
                      <p className="cv-subline">{item.subline}</p>
                    ) : null}
                    <ul className="plain-list cv-bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <h3>SELECTED MATHEMATICS PROGRAMS</h3>
            <div className="cv-list">
              {mathematicsPrograms.map((item) => (
                <article className="cv-entry" key={item.title}>
                  <p className="cv-date">{item.date}</p>
                  <div>
                    <h4>{item.title}</h4>
                    <ul className="plain-list cv-bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <h3>MATHEMATICAL COMMUNITY</h3>
            <div className="cv-list">
              {mathematicalCommunity.map((item) => (
                <article className="cv-entry" key={item.title}>
                  <p className="cv-date">
                    {"date" in item ? item.date : ""}
                  </p>
                  <div>
                    <h4>{item.title}</h4>
                    <ul className="plain-list cv-bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <h3>SKILLS &amp; INTERESTS</h3>
            <div className="cv-skills">
              <p>
                <strong>Technical:</strong> Lean, Python, SageMath and LaTeX
              </p>
              <p>
                <strong>Languages:</strong> English, Hindi and French (DELF B1)
              </p>
              <p>
                <strong>Interests:</strong> Number theory, functional equations,
                Cricket, Speedcubing, Rubik’s Cube fewest moves solving and
                GeoGuessr
              </p>
            </div>
          </CvDisclosure>

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
            Adhiraj Singh Anand · Gurgaon, India ·{" "}
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
