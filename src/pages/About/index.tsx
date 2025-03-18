import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

const AboutPage: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Observer for animations
  useEffect(() => {
    // Skip animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.about-section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1, // When 10% of the element is visible
        rootMargin: '0px 0px -100px 0px', // Start animation a bit before element is in view
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // 创建正确类型的 ref 回调函数
  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  // 处理表单变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加发送消息的逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的留言！我们会尽快联系您。');
    setFormData({ name: '', email: '', message: '' });
  };

  // 滚动到联系表单
  const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            Frontend developer passionate about creating beautiful and functional user experiences.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          {/* 左侧主要内容 */}
          <div className="about-main">
            <section className="about-section" ref={setRef(0)}>
              <h2 className="section-title">Who Am I?</h2>
              <div className="about-profile">
                <div className="about-profile-image">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Profile"
                  />
                </div>
                <div className="about-profile-content">
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
                  <div className="about-social">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section" ref={setRef(1)}>
              <h2 className="section-title">My Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3 className="skill-category-title">Frontend</h3>
                  <ul className="skill-list">
                    <li className="skill-item">HTML5</li>
                    <li className="skill-item">CSS3 / Sass / Less</li>
                    <li className="skill-item">JavaScript (ES6+)</li>
                    <li className="skill-item">TypeScript</li>
                    <li className="skill-item">React</li>
                    <li className="skill-item">Redux</li>
                    <li className="skill-item">Next.js</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3 className="skill-category-title">Backend</h3>
                  <ul className="skill-list">
                    <li className="skill-item">Node.js</li>
                    <li className="skill-item">Express</li>
                    <li className="skill-item">MongoDB</li>
                    <li className="skill-item">Firebase</li>
                    <li className="skill-item">REST API Design</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3 className="skill-category-title">Tools & Others</h3>
                  <ul className="skill-list">
                    <li className="skill-item">Git / GitHub</li>
                    <li className="skill-item">Webpack / Vite</li>
                    <li className="skill-item">Jest / React Testing Library</li>
                    <li className="skill-item">Responsive Web Design</li>
                    <li className="skill-item">Web Accessibility (WCAG)</li>
                    <li className="skill-item">Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="about-section" ref={setRef(2)}>
              <h2 className="section-title">My Journey</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2023 - Present</div>
                    <h3 className="timeline-title">Senior Frontend Developer at TechInnovate</h3>
                    <div className="timeline-details">
                      <p>
                        Leading a team of frontend developers, implementing best practices, and
                        building scalable web applications using React, TypeScript, and modern
                        tooling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2020 - 2023</div>
                    <h3 className="timeline-title">Frontend Developer at WebSolutions</h3>
                    <div className="timeline-details">
                      <p>
                        Developed and maintained multiple client projects using React, Redux, and
                        Node.js. Implemented responsive designs and improved web performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2018 - 2020</div>
                    <h3 className="timeline-title">Junior Web Developer at StartupHub</h3>
                    <div className="timeline-details">
                      <p>
                        Started my professional journey working with HTML, CSS, and JavaScript.
                        Built interactive websites and collaborated with the design team.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">2018</div>
                    <h3 className="timeline-title">BS in Computer Science</h3>
                    <div className="timeline-details">
                      <p>
                        Graduated with a Bachelor's degree in Computer Science from University of
                        California, with a focus on web technologies and user interface design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section" ref={setRef(3)}>
              <h2 className="section-title">About This Blog</h2>
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
              <div className="cta-container">
                <Link to="/blog" className="cta-button">
                  Explore My Articles
                </Link>
                <a href="#contact" onClick={scrollToContactForm} className="cta-button outline">
                  Get in Touch
                </a>
              </div>
            </section>
          </div>

          {/* 右侧联系表单 */}
          <div className="about-sidebar">
            <div className="contact-card" ref={contactFormRef} id="contact">
              <h2>Get In Touch</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    required
                    placeholder="What would you like to discuss?"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>

              <div className="contact-info">
                <div className="contact-method">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">hello@johndoe.com</span>
                  </div>
                </div>
                <div className="contact-method">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">San Francisco, CA</span>
                  </div>
                </div>
                <div className="contact-method">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+1 (123) 456-7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
