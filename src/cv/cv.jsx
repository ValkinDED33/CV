import { useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./cv.module.css";
import photo from "../assets/photo.jpg";

const profileData = {
  name: "Ihor Skrypka",
  position: "Fullstack Developer",
  summary:
    "Passionate and dedicated Fullstack Developer with hands-on experience in front-end and back-end development. Skilled in building responsive web applications and eager to learn new technologies and improve coding skills.",
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
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Poland, Warsaw" },
  ],
  techSkills: [
    "Node.js",
    "React",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Git",
    "Webpack",
    "Parcel",
  ],
  softSkills: [
    "Problem-solving",
    "Teamwork",
    "Attention to detail",
    "Adaptability",
    "Time management",
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
  ],
  workExperience: [
    {
      position: "Junior Fullstack Developer",
      years: "2023 - Present",
      achievements: [
        "Implemented responsive front-end layouts using React.",
        "Collaborated with back-end developers to integrate APIs.",
      ],
    },
  ],
  education: [
    {
      degree: "Fullstack Developer",
      institution: "GoIT Academy",
      year: "2023",
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Kyiv National University",
      year: "2021",
    },
  ],
};

const Cv = () => {
  useEffect(() => {
    const button = document.getElementById("download");

    const handleDownload = async () => {
      const content = document.getElementById("content");
      const canvas = await html2canvas(content, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("Ihor_Skrypka_Fullstack_Developer.pdf");
    };

    button?.addEventListener("click", handleDownload);

    return () => {
      button?.removeEventListener("click", handleDownload);
    };
  }, []);

  return (
    <div className={styles.resume} id="content">
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
        <h2 className={styles.sectionTitle}>Tech Skills</h2>
        <ul className={styles.list}>
          {profileData.techSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
        <h2 className={styles.sectionTitle}>Soft Skills</h2>
        <ul className={styles.list}>
          {profileData.softSkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
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

        <section>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {profileData.workExperience.map((work, idx) => (
            <div key={idx}>
              <strong>{work.position}</strong> ({work.years})
              <ul>
                {work.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Education</h2>
          {profileData.education.map((edu, idx) => (
            <div key={idx}>
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
            </div>
          ))}
        </section>

        <button id="download" className={styles.downloadButton}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Cv;
