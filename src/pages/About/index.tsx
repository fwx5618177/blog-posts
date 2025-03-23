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
  const [activeSection, setActiveSection] = useState<string>('');

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
            setActiveSection(entry.target.id);
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.3,
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

            <section className="about-section resume-section" ref={setRef(1)}>
              <h2 className="section-title">Resume</h2>
              <div className="resume-container">
                <div className="resume-preview">
                  <div className="resume-thumbnail">
                    <img
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                      alt="Resume preview"
                    />
                    <div className="resume-overlay">
                      <span>Professional Resume</span>
                    </div>
                  </div>
                </div>
                <div className="resume-buttons">
                  <Link to="/resume" className="resume-button view">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    View Online Resume
                  </Link>
                </div>
              </div>
            </section>

            <section className="about-section" ref={setRef(2)}>
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

            <section className="journey-section" ref={setRef(3)}>
              <h2 className="section-title">My Journey</h2>
              <div className="journey-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2023 - Present</span>
                      <span className="timeline-role">Senior Full Stack Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Tech Lead at Innovation Studio</h3>
                      <p>
                        Leading a team of developers in building scalable web applications and
                        microservices architecture.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Architected and implemented a cloud-native microservices platform</li>
                        <li>Improved system performance by 40% through optimization</li>
                        <li>Mentored junior developers and established best practices</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">React</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">AWS</span>
                        <span className="tag">Docker</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2021 - 2023</span>
                      <span className="timeline-role">Full Stack Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Senior Developer at TechFlow Solutions</h3>
                      <p>
                        Developed and maintained enterprise-level web applications with focus on
                        performance and scalability.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Led the migration from monolith to microservices architecture</li>
                        <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                        <li>Developed real-time analytics dashboard used by 50k+ users</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">Vue.js</span>
                        <span className="tag">Python</span>
                        <span className="tag">MongoDB</span>
                        <span className="tag">Kubernetes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2020 - 2021</span>
                      <span className="timeline-role">Frontend Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>UI/UX Developer at DesignCraft</h3>
                      <p>
                        Specialized in creating responsive and accessible web interfaces with modern
                        design principles.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Developed component library used across multiple projects</li>
                        <li>Improved accessibility scores to 98% across all platforms</li>
                        <li>Reduced page load times by 45% through optimization</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">React</span>
                        <span className="tag">SASS</span>
                        <span className="tag">Webpack</span>
                        <span className="tag">Jest</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2019 - 2020</span>
                      <span className="timeline-role">Backend Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Systems Engineer at DataFlow</h3>
                      <p>
                        Focused on building robust backend services and data processing pipelines.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Designed and implemented RESTful APIs serving 1M+ requests daily</li>
                        <li>Optimized database queries reducing response time by 35%</li>
                        <li>Built automated data processing pipelines handling 5TB+ data</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">Java</span>
                        <span className="tag">Spring Boot</span>
                        <span className="tag">PostgreSQL</span>
                        <span className="tag">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2018 - 2019</span>
                      <span className="timeline-role">DevOps Engineer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Cloud Infrastructure at CloudTech</h3>
                      <p>
                        Managed cloud infrastructure and implemented DevOps practices for
                        large-scale applications.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Implemented infrastructure as code using Terraform</li>
                        <li>Reduced deployment failures by 75% through automation</li>
                        <li>Set up monitoring and alerting systems for 100+ services</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">AWS</span>
                        <span className="tag">Terraform</span>
                        <span className="tag">Jenkins</span>
                        <span className="tag">Ansible</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2017 - 2018</span>
                      <span className="timeline-role">Mobile Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Mobile App Developer at AppWorks</h3>
                      <p>
                        Developed cross-platform mobile applications with focus on user experience
                        and performance.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Built and launched 3 successful mobile apps with 100k+ downloads</li>
                        <li>Implemented offline-first architecture for better user experience</li>
                        <li>Reduced app size by 40% through optimization</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">React Native</span>
                        <span className="tag">Flutter</span>
                        <span className="tag">Firebase</span>
                        <span className="tag">GraphQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2016 - 2017</span>
                      <span className="timeline-role">Junior Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Web Developer at StartupHub</h3>
                      <p>
                        Started career as a full stack developer working on various startup
                        projects.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Developed and maintained multiple client websites</li>
                        <li>Implemented responsive designs and modern UI components</li>
                        <li>Collaborated with design team to improve user experience</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">JavaScript</span>
                        <span className="tag">PHP</span>
                        <span className="tag">MySQL</span>
                        <span className="tag">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">2015 - 2016</span>
                      <span className="timeline-role">Intern Developer</span>
                    </div>
                    <div className="timeline-body">
                      <h3>Software Engineering Intern at TechStart</h3>
                      <p>
                        Gained hands-on experience in software development and agile methodologies.
                      </p>
                      <ul className="timeline-achievements">
                        <li>Contributed to the development of internal tools</li>
                        <li>Learned and implemented best coding practices</li>
                        <li>Participated in code reviews and team meetings</li>
                      </ul>
                      <div className="timeline-tags">
                        <span className="tag">HTML/CSS</span>
                        <span className="tag">jQuery</span>
                        <span className="tag">Git</span>
                        <span className="tag">Agile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="connect" className="about-section connect-section">
              <h2 className="section-title">Let's Connect</h2>
              <div className="connect-grid">
                <a
                  href="https://discord.gg/your-discord"
                  className="connect-item discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="connect-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <h3>Discord Community</h3>
                  <p>Join our tech community</p>
                </a>
                <a
                  href="https://t.me/your-telegram"
                  className="connect-item telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="connect-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.325.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.247-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <h3>Telegram Channel</h3>
                  <p>Get instant updates</p>
                </a>
                <a
                  href="https://twitter.com/your-twitter"
                  className="connect-item twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="connect-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <h3>Twitter/X</h3>
                  <p>Follow for updates</p>
                </a>
              </div>
            </section>

            <section className="about-section" ref={setRef(4)}>
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
