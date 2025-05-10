import styles from "./Skills.module.css";

const Skills = ({ techSkills = [], softSkills = [] }) => {
  return (
    <>
      {/* Tech Skills */}
      <section className={styles.page}>
        <div className={styles.avoidBreak}>
          <h2 className={styles.sectionTitle}>Tech Skills</h2>
          <ul className={styles.list}>
            {techSkills.length > 0 ? (
              techSkills.map((skill, idx) => (
                <li key={idx} className={styles.skillItem}>
                  {typeof skill === "string" ? skill : skill.name}
                </li>
              ))
            ) : (
              <li>No tech skills available</li>
            )}
          </ul>
        </div>
      </section>

      {/* Soft Skills */}
      <section className={styles.page}>
        <div className={styles.avoidBreak}>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <ul className={styles.list}>
            {softSkills.length > 0 ? (
              softSkills.map((skill, idx) => (
                <li key={idx} className={styles.skillItem}>
                  {typeof skill === "string" ? skill : skill.name}
                </li>
              ))
            ) : (
              <li>No soft skills available</li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
