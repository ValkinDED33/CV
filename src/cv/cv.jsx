import { useRef } from "react";
import html2pdf from "html2pdf.js";
import profileData from "./profileData";
import Skills from "./Skills";
import styles from "./cv.module.css";
import photo from "./photo.jpg";

const Cv = () => {
  const componentRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = componentRef.current;
    const options = {
      filename: "Ihor_Skrypka_Junior_Fullstack_Developer.pdf",
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      html2canvas: { scale: 2, logging: false, letterRendering: true },
      image: { type: "jpeg", quality: 0.98 },
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

          <h2 className={styles.sectionTitle}>Contacts</h2>
          <ul className={styles.contactList}>
            {profileData.contacts.map((contact, index) => (
              <li key={index}>
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
            <p>
              Passionate and dedicated Junior Fullstack Developer with hands-on
              experience in both front-end and back-end development. I am
              proficient in creating dynamic, responsive web applications using
              technologies such as React, Node.js, and TypeScript. Always eager
              to expand my skill set and tackle new challenges, I am committed
              to delivering high-quality code and collaborating with teams to
              build innovative solutions.
            </p>
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
                  <strong>Role:</strong> {project.role}
                </p>
                <p>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <p>{project.description}</p>
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
