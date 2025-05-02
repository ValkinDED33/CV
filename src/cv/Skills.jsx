import styles from "./skills.module.css";

const Skills = ({ techSkills = [], softSkills = [] }) => {
  return (
    <section>
      {/* Tech Skills */}
      <div className={styles.avoidBreak}>
        <h2 className={styles.sectionTitle}>Tech Skills</h2>
        <ul className={styles.list}>
          {techSkills.length > 0 ? (
            techSkills.map((skill, idx) => (
              <li key={idx} className={styles.skillItem}>
                <div>{skill.name}</div>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progressFill} ${styles.tech}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))
          ) : (
            <li>No tech skills available</li>
          )}
        </ul>
      </div>

      {/* Принудительный перенос страницы перед soft skills, если нужно */}
      {/* <div className={styles.pageBreak} /> */}

      {/* Soft Skills */}
      <div className={styles.avoidBreak}>
        <h2 className={styles.sectionTitle}>Soft Skills</h2>
        <ul className={styles.list}>
          {softSkills.length > 0 ? (
            softSkills.map((skill, idx) => (
              <li key={idx} className={styles.skillItem}>
                <div>{skill.name}</div>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progressFill} ${styles.soft}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))
          ) : (
            <li>No soft skills available</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
