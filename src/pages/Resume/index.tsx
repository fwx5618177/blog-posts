import React, { useState, useEffect, useRef } from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Resume.scss';

const Resume: React.FC = () => {
  const [mode, setMode] = useState<'simple' | 'elegant'>('simple');
  const [loading, setLoading] = useState(true);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleModeToggle = () => {
    setMode(prev => (prev === 'simple' ? 'elegant' : 'simple'));
  };

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    setLoading(true);
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`resume-${mode}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="resume-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const resumeData = {
    personal: {
      name: 'Alex Chen',
      title: 'Senior Software Engineer',
      email: 'alex.chen@example.com',
      phone: '+1 (415) 555-0123',
      location: 'San Francisco Bay Area',
      website: 'www.alexchen.dev',
      github: 'github.com/alexchen',
      linkedin: 'linkedin.com/in/alexchen',
      summary:
        'Senior Software Engineer with 10+ years of experience in building high-performance, scalable systems and leading engineering teams. Specialized in distributed systems, cloud architecture, and performance optimization. Proven track record of delivering mission-critical projects and mentoring junior engineers.',
    },
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Giants Inc.',
        location: 'San Francisco, CA',
        period: '2020 - Present',
        achievements: [
          'Led the redesign and implementation of the core microservices architecture, resulting in 99.99% uptime and 40% reduction in operational costs',
          'Architected and deployed a real-time data processing pipeline handling 1M+ events per second using Kafka and Elasticsearch',
          'Mentored 8 junior engineers and established engineering best practices that improved code quality metrics by 60%',
          'Spearheaded the adoption of Kubernetes and service mesh, reducing deployment time from hours to minutes',
        ],
        technologies: ['Go', 'Kubernetes', 'AWS', 'Kafka', 'Elasticsearch', 'gRPC', 'Terraform'],
      },
      {
        title: 'Software Engineer',
        company: 'Cloud Scale Solutions',
        location: 'Seattle, WA',
        period: '2017 - 2020',
        achievements: [
          'Designed and implemented a distributed caching system that reduced API response times by 75%',
          'Built a high-throughput payment processing system handling $500M+ in annual transactions',
          'Led the migration of legacy monolith to microservices, improving system reliability by 40%',
        ],
        technologies: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'Docker', 'RabbitMQ'],
      },
      {
        title: 'Backend Engineer',
        company: 'Data Systems Corp',
        location: 'Boston, MA',
        period: '2014 - 2017',
        achievements: [
          'Developed scalable RESTful APIs serving 100K+ concurrent users',
          'Implemented real-time analytics dashboard reducing data latency from hours to seconds',
          'Optimized database queries resulting in 65% improvement in application performance',
        ],
        technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'AWS', 'Docker'],
      },
    ],
    skills: {
      technical: [
        {
          category: 'Languages & Frameworks',
          items: ['Go', 'Java', 'Python', 'TypeScript', 'Spring Boot', 'gRPC', 'GraphQL'],
        },
        {
          category: 'Infrastructure & DevOps',
          items: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'CI/CD', 'Prometheus', 'Grafana'],
        },
        {
          category: 'Databases & Messaging',
          items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kafka', 'RabbitMQ'],
        },
      ],
      soft: [
        'Technical Leadership',
        'System Design',
        'Team Mentoring',
        'Project Management',
        'Problem Solving',
        'Communication',
      ],
    },
    certifications: [
      {
        name: 'Google Cloud Professional Architect',
        issuer: 'Google Cloud',
        date: '2023',
        link: 'https://cloud.google.com/certification/cloud-architect',
      },
      {
        name: 'AWS Solutions Architect Professional',
        issuer: 'Amazon Web Services',
        date: '2022',
        link: 'https://aws.amazon.com/certification/certified-solutions-architect-professional',
      },
      {
        name: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        date: '2021',
        link: 'https://www.cncf.io/certification/cka',
      },
    ],
    projects: [
      {
        name: 'Distributed Cache System',
        description:
          'Built a distributed caching system supporting 1M+ operations per second with sub-millisecond latency',
        technologies: ['Go', 'Redis', 'Prometheus', 'Kubernetes'],
        link: 'https://github.com/alexchen/dcache',
      },
      {
        name: 'Real-time Analytics Platform',
        description:
          'Developed a streaming analytics platform processing 10TB+ daily data with real-time insights',
        technologies: ['Java', 'Kafka', 'Elasticsearch', 'Grafana'],
        link: 'https://github.com/alexchen/rtanalytics',
      },
    ],
    publications: [
      {
        title: 'Scaling Microservices to Handle Million QPS',
        publisher: 'InfoQ',
        year: '2023',
        link: 'https://www.infoq.com/articles/scaling-microservices',
      },
      {
        title: 'Building Resilient Systems with Circuit Breakers',
        publisher: 'Medium Engineering',
        year: '2022',
        link: 'https://medium.com/engineering/circuit-breakers',
      },
    ],
  };

  return (
    <div className={`resume-page ${mode}`}>
      <div className="resume-controls">
        <button
          className="mode-toggle"
          onClick={handleModeToggle}
          title={`Switch to ${mode === 'simple' ? 'elegant' : 'simple'} mode`}
        >
          <MdOutlineSwapHoriz />
          <span>{mode === 'simple' ? 'Elegant' : 'Simple'} Mode</span>
        </button>
        <div className="resume-actions">
          <button className="preview-btn" onClick={() => window.open(`#preview-${mode}`, '_blank')}>
            <FiEye />
            <span>Preview</span>
          </button>
          <button className="download-btn" onClick={handleDownload}>
            <FiDownload />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      <div className="resume-container" ref={resumeRef}>
        {mode === 'simple' ? (
          <div className="resume-content simple">
            <div className="resume-header">
              <h1>{resumeData.personal.name}</h1>
              <p className="title">{resumeData.personal.title}</p>
              <div className="contact-info">
                <a href={`mailto:${resumeData.personal.email}`}>
                  <FaEnvelope />
                  {resumeData.personal.email}
                </a>
                <span>•</span>
                <a href={`tel:${resumeData.personal.phone}`}>
                  <FaPhone />
                  {resumeData.personal.phone}
                </a>
                <span>•</span>
                <span>
                  <FaMapMarkerAlt />
                  {resumeData.personal.location}
                </span>
              </div>
              <div className="social-links">
                <a
                  href={`https://${resumeData.personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={`https://${resumeData.personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="resume-section">
              <h2>Professional Summary</h2>
              <p className="summary">{resumeData.personal.summary}</p>
            </div>

            <div className="resume-section">
              <h2>Experience</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div className="title-company">
                      <h3>{exp.title}</h3>
                      <span className="company">{exp.company}</span>
                    </div>
                    <div className="location-date">
                      <span className="location">{exp.location}</span>
                      <span className="date">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="technologies">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-section">
              <h2>Skills</h2>
              <div className="skills-grid">
                {resumeData.skills.technical.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h3>{category.category}</h3>
                    <div className="skill-tags">
                      {category.items.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="resume-section">
              <h2>Education</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="resume-content elegant">
            <div className="resume-header">
              <div className="header-content">
                <h1>{resumeData.personal.name}</h1>
                <p className="title">{resumeData.personal.title}</p>
                <p className="summary">{resumeData.personal.summary}</p>
                <div className="contact-grid">
                  <a href={`mailto:${resumeData.personal.email}`} className="contact-item">
                    <FaEnvelope />
                    <span>{resumeData.personal.email}</span>
                  </a>
                  <a href={`tel:${resumeData.personal.phone}`} className="contact-item">
                    <FaPhone />
                    <span>{resumeData.personal.phone}</span>
                  </a>
                  <span className="contact-item">
                    <FaMapMarkerAlt />
                    <span>{resumeData.personal.location}</span>
                  </span>
                  <a
                    href={`https://${resumeData.personal.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <FaGithub />
                    <span>{resumeData.personal.github}</span>
                  </a>
                  <a
                    href={`https://${resumeData.personal.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <FaLinkedin />
                    <span>{resumeData.personal.linkedin}</span>
                  </a>
                </div>
              </div>
              <div className="profile-image">
                {/* Replace with your profile image */}
                <img src="/profile-placeholder.jpg" alt="Profile" />
              </div>
            </div>

            <div className="resume-body">
              <div className="main-content">
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Professional Experience</h2>
                    <div className="section-line"></div>
                  </div>
                  <div className="timeline">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="experience-item">
                        <div className="experience-marker"></div>
                        <div className="experience-content">
                          <div className="experience-header">
                            <div className="title-company">
                              <h3>{exp.title}</h3>
                              <span className="company">{exp.company}</span>
                            </div>
                            <div className="location-date">
                              <span className="location">{exp.location}</span>
                              <span className="date">{exp.period}</span>
                            </div>
                          </div>
                          <ul className="achievements">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                          <div className="technologies">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-section">
                  <div className="section-header">
                    <h2>Projects</h2>
                    <div className="section-line"></div>
                  </div>
                  <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="project-technologies">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          View Project
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="side-content">
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Technical Skills</h2>
                    <div className="section-line"></div>
                  </div>
                  <div className="skills-grid">
                    {resumeData.skills.technical.map((category, index) => (
                      <div key={index} className="skill-category">
                        <div className="skill-icon">
                          <i className="fas fa-code"></i>
                        </div>
                        <h3>{category.category}</h3>
                        <div className="skill-tags">
                          {category.items.map((skill, i) => (
                            <span key={i} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-section">
                  <div className="section-header">
                    <h2>Certifications</h2>
                    <div className="section-line"></div>
                  </div>
                  <div className="certifications-list">
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="certification-item">
                        <h3>{cert.name}</h3>
                        <p className="issuer">{cert.issuer}</p>
                        <p className="date">{cert.date}</p>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          Verify
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-section">
                  <div className="section-header">
                    <h2>Languages</h2>
                    <div className="section-line"></div>
                  </div>
                  <div className="languages-list">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="language-item">
                        <span className="language-name">{exp.title}</span>
                        <span className="language-level">{exp.company}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
