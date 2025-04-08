import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './contact.module.scss';
import ContactForm from './components/ContactForm/ContactForm';
import LocationMap from './components/LocationMap/LocationMap';

const Contact: React.FC = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Set page as loaded with slight delay for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={classNames(styles['contact-page'], {
        [styles.loaded]: isPageLoaded,
      })}
    >
      <div className={styles['contact-shapes']}>
        <div className={styles['shape-1']}></div>
        <div className={styles['shape-2']}></div>
        <div className={styles['shape-3']}></div>
      </div>

      <div className={styles.container}>
        <header className={styles['contact-header']}>
          <h1 className={styles['contact-title']}>Get in Touch</h1>
          <p className={styles['contact-description']}>
            Have a question, feedback, or just want to say hello? Fill out the form below and we'll
            get back to you as soon as possible.
          </p>
        </header>

        <div className={styles['contact-content']}>
          <div className={styles['contact-info']}>
            <div className={styles['info-card']}>
              <div className={styles['info-icon']}>📧</div>
              <h3>Email</h3>
              <p>contact@fwxblog.com</p>
              <a
                href="mailto:contact@fwxblog.com"
                className={styles['info-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </div>

            <div className={styles['info-card']}>
              <div className={styles['info-icon']}>💬</div>
              <h3>Social Media</h3>
              <div className={styles['social-links']}>
                <a
                  href="https://twitter.com/fwxblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com/fwxblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/fwxblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className={styles['info-card']}>
              <div className={styles['info-icon']}>⏰</div>
              <h3>Response Time</h3>
              <p>Usually within 24-48 hours</p>
            </div>
          </div>

          <ContactForm />
        </div>

        <LocationMap />

        <div className={styles['faq-section']}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles['faq-grid']}>
            <div className={styles['faq-item']}>
              <h3>How quickly do you respond to inquiries?</h3>
              <p>
                We strive to respond to all inquiries within 24 hours during business days. For
                urgent matters, please call us directly.
              </p>
            </div>
            <div className={styles['faq-item']}>
              <h3>Can I request a custom project?</h3>
              <p>
                Absolutely! We love working on custom projects. Please provide as much detail as
                possible in your message about what you're looking for.
              </p>
            </div>
            <div className={styles['faq-item']}>
              <h3>Do you offer consultations?</h3>
              <p>
                Yes, we offer both free initial consultations and more in-depth paid consulting
                services depending on your needs.
              </p>
            </div>
            <div className={styles['faq-item']}>
              <h3>How can I join your team?</h3>
              <p>
                We're always looking for talented individuals! Send us your resume and portfolio
                through this contact form with "Job Application" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
