import "./App.css";

const projects = [
  {
    title: "Truck Monitoring System",
    description:
      "A tracking platform that records truck movement, cargo details, timestamps, and photo documentation from warehouse to destination.",
    tools: ["React JS", "PostgreSQL", "Node.js"],
  },
  {
    title: "Vehicle Inspection System",
    description:
      "A role-based system for requesting inspections, recording vehicle conditions, generating reports, and monitoring inspection status.",
    tools: ["React JS", "SQL", "REST API"],
  },
  {
    title: "Power BI Business Dashboards",
    description:
      "Interactive dashboards connected to Microsoft Business Central for inventory, sales, customers, billings, and collections.",
    tools: ["Power BI", "Power Query", "Business Central"],
  },
  {
    title: "Internal Company Website",
    description:
      "A centralized employee portal for departmental services, policies, forms, internal applications, company news, and announcements.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Approval Workflow Automation",
    description:
      "An automated workflow for approvals, notifications, database status updates, and service-request monitoring.",
    tools: ["Power Automate", "Microsoft Forms", "SharePoint"],
  },
  {
    title: "Conference Room Booking System",
    description:
      "A booking application that allows employees to reserve conference rooms and automatically notify designated administrators.",
    tools: ["React JS", "Power Automate", "Microsoft 365"],
  },
];

const experiences = [
  {
    position: "Freelance Developer",
    company: "Independent",
    date: "January 2026 – Present",
    description:
      "Developing web-based operational systems, including a truck monitoring platform with cargo tracking, photo documentation, and time-in and time-out records.",
  },
  {
    position: "Digital Transformation Associate",
    company: "Rayomar Management, Inc.",
    date: "July 2025 – Present",
    description:
      "Developing internal systems, business dashboards, websites, workflow automations, booking platforms, and operational monitoring solutions.",
  },
  {
    position: "Business Intelligence Associate",
    company: "Rayomar Management, Inc.",
    date: "January 2025 – July 2025",
    description:
      "Conducted market research, competitive analysis, feasibility studies, subsidiary performance reviews, and business expansion studies.",
  },
  {
    position: "Business Intelligence and Digital Analytics Intern",
    company: "Unilab, Inc.",
    date: "February 2024 – March 2024",
    description:
      "Created a database migration model from C++ to Python and prepared supporting technical reports.",
  },
];

const skills = [
  "React JS",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "C++",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Power BI",
  "Power Automate",
  "Business Central",
  "Database Design",
  "Machine Learning",
  "Business Intelligence",
];

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="nav-container">
          <a className="logo" href="#home">
            CEMR
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <p className="eyebrow">Digital Transformation Professional</p>

              <h1>
                Charles Emmanuel
                <span> Ramos</span>
              </h1>

              <h2>
                Business Intelligence, Automation, and Web Development
              </h2>

              <p className="hero-description">
                I design business systems, dashboards, workflow automations,
                and web applications that convert manual processes into
                structured digital solutions.
              </p>

              <div className="hero-buttons">
                <a className="primary-button" href="#projects">
                  View Projects
                </a>

                <a
                  className="secondary-button"
                  href="/Charles_Ramos_One_Page_Resume_With_Photo.docx"
                  download
                >
                  Download Resume
                </a>
              </div>

              <div className="contact-preview">
                <a href="mailto:cemman08@gmail.com">
                  cemman08@gmail.com
                </a>

                <a href="tel:+639056728408">
                  +63 905 672 8408
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="profile-placeholder">
                <span>CR</span>
              </div>

              <div className="hero-card-details">
                <p>Based in</p>
                <h3>Biñan, Laguna</h3>

                <p>Specialization</p>
                <h3>Digital Transformation</h3>

                <p>Education</p>
                <h3>BS Computer Science, Cum Laude</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-container">
            <div className="section-heading">
              <p>Profile</p>
              <h2>About Me</h2>
            </div>

            <div className="about-grid">
              <div className="about-content">
                <p>
                  I am a Computer Science graduate and Cum Laude from National
                  University with experience in business intelligence, digital
                  transformation, process automation, data analysis, and
                  front-end development.
                </p>

                <p>
                  I have worked on internal websites, vehicle inspection
                  platforms, booking systems, approval workflows, Power BI
                  dashboards, and operational monitoring tools.
                </p>

                <p>
                  My objective is to create practical and measurable digital
                  solutions that improve efficiency, visibility, and
                  decision-making.
                </p>
              </div>

              <div className="about-statistics">
                <article>
                  <strong>6+</strong>
                  <span>Major Digital Projects</span>
                </article>

                <article>
                  <strong>3</strong>
                  <span>Professional Roles</span>
                </article>

                <article>
                  <strong>2024</strong>
                  <span>Computer Science Graduate</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alternate-section">
          <div className="section-container">
            <div className="section-heading">
              <p>Career</p>
              <h2>Professional Experience</h2>
            </div>

            <div className="experience-list">
              {experiences.map((experience, index) => (
                <article className="experience-card" key={index}>
                  <div className="experience-date">
                    {experience.date}
                  </div>

                  <div>
                    <h3>{experience.position}</h3>
                    <h4>{experience.company}</h4>
                    <p>{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-container">
            <div className="section-heading">
              <p>Portfolio</p>
              <h2>Selected Projects</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={index}>
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tool-list">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section alternate-section">
          <div className="section-container">
            <div className="section-heading">
              <p>Capabilities</p>
              <h2>Technical Skills</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <p>Education and Credentials</p>
              <h2>Qualifications</h2>
            </div>

            <div className="qualification-grid">
              <article className="qualification-card">
                <span>Education</span>
                <h3>Bachelor of Science in Computer Science</h3>
                <p>National University</p>
                <strong>Cum Laude, 2024</strong>
              </article>

              <article className="qualification-card">
                <span>Microsoft Certification</span>
                <h3>Security Fundamentals</h3>
                <p>Microsoft Certified</p>
              </article>

              <article className="qualification-card">
                <span>Microsoft Certification</span>
                <h3>Compliance Fundamentals</h3>
                <p>Microsoft Certified</p>
              </article>

              <article className="qualification-card">
                <span>Microsoft Certification</span>
                <h3>Identity Fundamentals</h3>
                <p>Microsoft Certified</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-container">
            <p>Contact</p>

            <h2>
              Let us build a more efficient digital process.
            </h2>

            <div className="contact-links">
              <a href="mailto:cemman08@gmail.com">
                <span>Email</span>
                cemman08@gmail.com
              </a>

              <a href="tel:+639056728408">
                <span>Mobile</span>
                +63 905 672 8408
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © {currentYear} Charles Emmanuel M. Ramos
      </footer>
    </div>
  );
}

export default App;