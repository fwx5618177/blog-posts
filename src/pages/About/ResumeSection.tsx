import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ResumeSection.module.scss';
import { keyAchievements, technicalExpertise } from './mockData';

const ResumeSection = () => {
  return (
    <section className={classNames(styles.aboutSection, styles.resumeSection)}>
      <h2 className={styles.sectionTitle}>Resume</h2>
      <div className={styles.resumeContent}>
        <div className={styles.resumeHeader}>
          <div className={styles.resumeTitle}>
            <h3>Senior Full Stack Engineer</h3>
            <span className={styles.resumeSubtitle}>Specialized in Modern Web Development</span>
          </div>
          <div className={styles.resumeActions}>
            <Link to="/resume" className={classNames(styles.resumeLink, styles.primary)}>
              <span className={styles.linkContent}>
                <span className={styles.linkText}>View Full Resume</span>
                <svg
                  className={styles.linkIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5l7 7-7 7M5 12h14"></path>
                </svg>
              </span>
              <span className={styles.linkBackground}></span>
            </Link>
          </div>
        </div>

        <div className={styles.resumeBody}>
          <div className={styles.resumeDescription}>
            <p>
              Currently leading frontend development at TechInnovate, focusing on building scalable
              web applications and microservices. Passionate about creating performant user
              experiences and mentoring junior developers.
            </p>
          </div>

          <div className={styles.resumeMain}>
            <div className={styles.resumeExpertise}>
              <h3 className={styles.expertiseTitle}>Technical Expertise</h3>
              <div className={styles.expertiseGrid}>
                {technicalExpertise.map((expertise, index) => (
                  <div key={index} className={styles.expertiseItem}>
                    <div className={styles.expertiseHeader}>
                      <span className={styles.expertiseName}>{expertise.name}</span>
                      <span className={styles.expertiseLevel}>{expertise.level}</span>
                    </div>
                    <div className={styles.expertiseSkills}>
                      {expertise.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.skillTag} data-level={skill.level}>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.resumeAchievements}>
              <h3 className={styles.achievementsTitle}>Key Achievements</h3>
              <div className={styles.achievementsList}>
                {keyAchievements.map((achievement, index) => (
                  <div key={index} className={styles.achievementItem}>
                    <span className={styles.achievementIcon}>{achievement.icon}</span>
                    <div className={styles.achievementContent}>
                      <h5>{achievement.title}</h5>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.resumeAction}>
              <Link to="/resume" className={styles.viewResumeLink}>
                <span>View Full Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.resumeStats}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v6m0 12v-6m0 0a6 6 0 100-12 6 6 0 000 12z"></path>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Years Experience</span>
                <span className={styles.statDetail}>Full Stack Development</span>
              </div>
              <div className={styles.statProgress}>
                <div className={styles.progressBar} style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
                <span className={styles.statDetail}>Enterprise & Startup Solutions</span>
              </div>
              <div className={styles.statProgress}>
                <div className={styles.progressBar} style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10m0 0L8 14m4-4l4 4m-4-4V4"></path>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Tech Publications</span>
                <span className={styles.statDetail}>Articles & Tutorials</span>
              </div>
              <div className={styles.statProgress}>
                <div className={styles.progressBar} style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
