import { useRef } from "react";
import html2pdf from "html2pdf.js";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./cv.module.css";
import photo from "./photo.jpg";
import Skills from "./Skills";

const profileData = {
  name: "Ihor Skrypka",
  position: "Junior Fullstack Developer",
  summary:
    "Passionate and dedicated Junior Fullstack Developer with hands-on experience in front-end and back-end development. Skilled in building responsive web applications and eager to learn new technologies and improve coding skills.",
  contacts: [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+48 577 829 457",
      link: "tel:+48577829457",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sonyierik289@gmail.com",
      link: "mailto:sonyierik289@gmail.com",
    },
    {
      icon: <FaTelegramPlane />,
      label: "Telegram",
      value: "@ValkinDED_PL",
      link: "https://t.me/ValkinDED_PL",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Ihor Skrypka",
      link: "https://linkedin.com/in/ihor-skrypka-678096359",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "ValkinDED33",
      link: "https://github.com/ValkinDED33",
    },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Poland, Katowice" },
  ],
  techSkills: [
    { name: "Node.js", level: 80 },
    { name: "React", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "Git", level: 85 },
    { name: "Webpack", level: 70 },
    { name: "Parcel", level: 65 },
  ],
  softSkills: [
    { name: "Problem-solving", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Attention to detail", level: 88 },
    { name: "Adaptability", level: 80 },
    { name: "Time management", level: 85 },
  ],
  languages: [
    "English: Upper-Intermediate",
    "Polish: Intermediate",
    "Ukrainian: Native",
    "Russian: Native",
  ],
  projects: [
    {
      name: "Landing Page for WebStudio",
      technologies: "HTML, SASS, BEM, Responsive Design",
      link: "https://valkinded33.github.io/goit-markup-hw-06/",
      github: "https://github.com/ValkinDED33/goit-markup-hw-06",
    },
    {
      name: "Eco Project Section 'How It Works'",
      technologies: "HTML, CSS, Flexbox, Git",
      link: "https://lanalivins.github.io/The-Flexbox-Crew/",
      github: "https://github.com/LanaLivins/The-Flexbox-Crew",
    },
    {
      name: 'Collaborative Portfolio Section "FAQ"',
      technologies: "HTML, CSS, JavaScript",
      link: "https://alex-chernomor.github.io/project-K3n5t13n/",
      github: "https://github.com/Alex-chernomor/project-K3n5t13n",
    },
    {
      name: "Contact Manager Application (Phonebook)",
      technologies: "React, Redux Toolkit, Redux Persist, Vite",
      link: "https://goit-react-hw-08-ten-blue.vercel.app",
      github: "https://github.com/ValkinDED33/goit-react-hw-08",
    },
    {
      name: "Contact Book with Backend",
      technologies: "React, Redux, Node.js (Mock Backend), Axios",
      link: "https://goit-react-hw-07-two-beta.vercel.app",
      github: "https://github.com/ValkinDED33/goit-react-hw-07",
    },
    {
      name: "Utility Functions in TypeScript",
      technologies: "TypeScript, Vite",
      link: "https://goit-typescript-hw-02-lemon-two-26.vercel.app",
      github: "https://github.com/ValkinDED33/goit-typescript-hw-02",
    },
  ],
  education: [
    {
      degree: "Junior Fullstack Developer",
      institution: "GoIT Academy",
      year: "2023",
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Kyiv National University",
      year: "2021",
    },
  ],
  workExperience: [
    {
      position: "Junior Fullstack Developer (Internship Project)",
      years: "2024",
      achievements: [
        "Developed a contact management app using React, Redux Toolkit, and Vite.",
        "Implemented user authentication and private routing with persistent login.",
        "Worked with REST APIs and managed asynchronous requests using Axios.",
      ],
    },
    {
      position: "Frontend Developer – Team Collaboration Project",
      years: "2023",
      achievements: [
        "Created responsive UI for an eco-landing page using HTML, CSS, and Flexbox.",
        "Applied BEM methodology and Git for clean, scalable code.",
        "Built interactive 'How It Works' section with accessibility in mind.",
      ],
    },
    {
      position: "Open Source Contributor",
      years: "2023–2024",
      achievements: [
        "Contributed to collaborative web portfolio projects with HTML, CSS, and JS.",
        "Engaged in team code reviews and pull requests.",
        "Improved FAQ sections for better UX and SEO optimization.",
      ],
    },
  ],
};

const Cv = () => {
  const componentRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = componentRef.current;
    const options = {
      filename: "Ihor_Skrypka_Junior_Fullstack_Developer.pdf",
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      html2canvas: { scale: 2 },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <>
      <div className={styles.resume} ref={componentRef}>
        <div className={styles.leftPanel}>
          <div className={styles.photoWrapper}>
            <img src={photo} alt="Profile" className={styles.photo} />
          </div>

          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <ul className={styles.contactList}>
            {profileData.contacts.map((contact, index) => (
              <li key={index}>
                {contact.icon}{" "}
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                ) : (
                  contact.value
                )}
              </li>
            ))}
          </ul>

          <Skills
            techSkills={profileData.techSkills}
            softSkills={profileData.softSkills}
          />

          <h2 className={styles.sectionTitle}>Languages</h2>
          <ul className={styles.list}>
            {profileData.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>

        <div className={styles.rightPanel}>
          <h1 className={styles.name}>{profileData.name}</h1>
          <h3 className={styles.position}>{profileData.position}</h3>

          <section>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p>{profileData.summary}</p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Project Experience</h2>
            {profileData.projects.map((project, idx) => (
              <div key={idx} className={styles.projectItem}>
                <h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h4>
                <p>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                </p>
              </div>
            ))}
          </section>

          <div className="html2pdf__page-break"></div>

          <section>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            {profileData.workExperience.map((work, idx) => (
              <div key={idx} className={styles.experienceItem}>
                <strong>{work.position}</strong> ({work.years})
                <ul>
                  {work.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <div className="html2pdf__page-break"></div>

          <section className={styles.education}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {profileData.education.map((edu, idx) => (
              <div key={idx}>
                <strong>{edu.degree}</strong> – {edu.institution} ({edu.year})
              </div>
            ))}
          </section>
        </div>
      </div>

      <button className={styles.downloadButton} onClick={handleDownloadPdf}>
        Download PDF
      </button>
    </>
  );
};

export default Cv;
