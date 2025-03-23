import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.module.scss';
import { connectLinks, journeyData, skillsData, socialLinks } from './mockData';
import ResumeSection from './ResumeSection';
import SocialLink from './SocialLink';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHeader}>
        <div className={styles.container}>
          <h1 className={styles.aboutTitle}>About Me</h1>
          <p className={styles.aboutSubtitle}>
            Frontend developer passionate about creating beautiful and functional user experiences.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutMain}>
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>Who Am I?</h2>
              <div className={styles.aboutProfile}>
                <div className={styles.aboutProfileImage}>
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Profile"
                  />
                </div>
                <div className={styles.aboutProfileContent}>
                  <p>
                    Hello! I'm John Doe, a passionate frontend developer with over 5 years of
                    experience in creating responsive and user-friendly web applications. I
                    specialize in React, TypeScript, and modern CSS techniques.
                  </p>
                  <p>
                    Based in San Francisco, I currently work at TechInnovate where I lead the
                    frontend development team responsible for building scalable and performant web
                    applications. I'm particularly interested in web accessibility, performance
                    optimization, and creating delightful user experiences.
                  </p>
                  <SocialLink data={socialLinks} />
                </div>
              </div>
            </section>

            <ResumeSection />

            <section className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>My Skills</h2>
              <div className={styles.skillsGrid}>
                {skillsData.map((category, index) => (
                  <div key={index} className={styles.skillCategory}>
                    <h3 className={styles.skillCategoryTitle}>{category.category}</h3>
                    <ul className={styles.skillList}>
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className={styles.skillItem}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.journeySection}>
              <h2 className={styles.sectionTitle}>My Journey</h2>
              <div className={styles.journeyTimeline}>
                {journeyData.map((journey, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <div className={styles.markerDot}></div>
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>
                        <span className={styles.timelineDate}>{journey.period}</span>
                        <span className={styles.timelineRole}>{journey.role}</span>
                      </div>
                      <div className={styles.timelineBody}>
                        <h3>{journey.company}</h3>
                        <p>{journey.description}</p>
                        <ul className={styles.timelineAchievements}>
                          {journey.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                        <div className={styles.timelineTags}>
                          {journey.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="connect"
              className={classNames(styles.aboutSection, styles.connectSection)}
            >
              <h2 className={styles.sectionTitle}>Let's Connect</h2>
              <div className={styles.connectGrid}>
                {connectLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={classNames(styles.connectItem, styles[link.className])}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.connectIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        {link.icon}
                      </svg>
                    </div>
                    <h3>{link.title}</h3>
                    <p>{link.description}</p>
                  </a>
                ))}
              </div>
            </section>

            <section className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>About This Blog</h2>
              <p>
                I created this blog to share my knowledge and experiences in web development. Here,
                I write about frontend technologies, best practices, tips and tricks, and my journey
                as a developer.
              </p>
              <p>
                My goal is to provide valuable content that helps other developers, especially those
                who are just starting their journey in web development. I believe in learning by
                teaching and sharing knowledge with the community.
              </p>
              <div className={styles.ctaContainer}>
                <Link to="/blog" className={styles.ctaButton}>
                  Explore My Articles
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
