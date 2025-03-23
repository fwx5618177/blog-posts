import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiDownload, FiEye, FiX } from 'react-icons/fi';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Resume.scss';

type ResumeMode = 'simple' | 'elegant' | 'custom';
type PreviewType = 'screen' | 'pdf';

const Resume: React.FC = () => {
  const [mode, setMode] = useState<ResumeMode>('simple');
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<PreviewType>('screen');
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const modeOptions = [
    { value: 'simple', label: 'Simple Mode', description: 'Clean and minimalist design' },
    {
      value: 'elegant',
      label: 'Elegant Mode',
      description: 'Professional and sophisticated layout',
    },
    { value: 'custom', label: 'Custom Mode', description: 'Modern and creative style' },
  ];

  useEffect(() => {
    const hash = location.hash.slice(1);
    const previewModeRegex = /^(simple|elegant|custom)-resume(?:-(screen|pdf))?$/;
    const previewMode = previewModeRegex.exec(hash);

    if (previewMode) {
      const selectedMode = previewMode[1] as ResumeMode;
      const selectedPreviewType = (previewMode[2] || 'screen') as PreviewType;
      setMode(selectedMode);
      setPreviewType(selectedPreviewType);
      setIsFullscreen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsFullscreen(false);
      document.body.style.overflow = 'auto';
    }
  }, [location.hash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        void navigate(''); // Explicitly mark Promise as ignored
        setIsFullscreen(false);
        document.body.style.overflow = 'auto';
      }
    },
    [isFullscreen, navigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleEsc]);

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMode = e.target.value as ResumeMode;
    setMode(newMode);
    if (isFullscreen) {
      void navigate(`#${newMode}-resume`); // Explicitly mark Promise as ignored
    }
  };

  const generatePDF = async (): Promise<Blob> => {
    if (!resumeRef.current) throw new Error('Resume reference not found');

    const element = resumeRef.current;
    const resumeContent = element.querySelector('.resume-content');
    if (!resumeContent) throw new Error('Resume content not found');

    // Clone the element to avoid modifying the original
    const clone = resumeContent.cloneNode(true) as HTMLElement;

    // Apply print-specific styles to maintain consistency
    clone.style.width = '1200px';
    clone.style.margin = '0';
    clone.style.padding = '40px';
    clone.style.boxSizing = 'border-box';
    clone.style.background = 'white';
    clone.style.borderRadius = '0';
    clone.style.boxShadow = 'none';
    clone.style.transform = 'none';

    // Create a temporary container
    const container = document.createElement('div');
    container.style.width = '1200px';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.appendChild(clone);
    document.body.appendChild(container);

    try {
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: 1200,
        height: clone.offsetHeight,
        backgroundColor: 'white',
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling'],
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Calculate scale to fit width while maintaining aspect ratio
      const scale = pageWidth / imgWidth;
      const scaledHeight = imgHeight * scale;

      // If content is taller than page, create multiple pages
      let heightLeft = scaledHeight;
      let position = 0;
      let page = 1;

      pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, scaledHeight);

      while (heightLeft >= pageHeight) {
        position = -pageHeight * page;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, scaledHeight);
        heightLeft -= pageHeight;
        page++;
      }

      // Return PDF as Blob
      const pdfBlob = pdf.output('blob');
      return pdfBlob;
    } finally {
      // Clean up
      document.body.removeChild(container);
    }
  };

  const handlePreviewClick = async (type: PreviewType) => {
    try {
      if (type === 'pdf') {
        setLoading(true);
        const pdfBlob = await generatePDF();
        // Create a URL for the Blob
        const pdfBlobUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfBlobUrl);
        setPreviewType('pdf');
        void navigate(`#${mode}-resume-${type}`);
        setIsFullscreen(true);
        document.body.style.overflow = 'hidden';
      } else {
        setPreviewType('screen');
        void navigate(`#${mode}-resume-${type}`);
        setIsFullscreen(true);
        document.body.style.overflow = 'hidden';
      }
    } catch (error) {
      console.error('Error generating PDF preview:', error);
      setPreviewType('screen');
      setPdfUrl(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    setLoading(true);
    try {
      const pdfBlob = await generatePDF();
      const downloadUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `resume-${mode}.pdf`;
      link.click();
      // Clean up
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExitFullscreen = () => {
    void navigate('');
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
    // Clean up PDF URL and reset states
    if (previewType === 'pdf' && pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
      setPreviewType('screen');
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

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

  const ResumeContent = () => {
    switch (mode) {
      case 'simple':
        return (
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
        );
      case 'elegant':
        return (
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
        );
      case 'custom':
        return (
          <div className="resume-content custom">
            <div className="custom-header">
              <div className="header-main">
                <h1>{resumeData.personal.name}</h1>
                <p className="title">{resumeData.personal.title}</p>
              </div>
              <div className="header-side">
                <div className="contact-info">
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
                </div>
                <div className="social-links">
                  <a
                    href={`https://${resumeData.personal.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={`https://${resumeData.personal.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="custom-body">
              <div className="main-column">
                <section className="summary-section">
                  <h2>Professional Summary</h2>
                  <p>{resumeData.personal.summary}</p>
                </section>

                <section className="experience-section">
                  <h2>Work Experience</h2>
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="experience-card">
                      <div className="card-header">
                        <div className="position-info">
                          <h3>{exp.title}</h3>
                          <span className="company">{exp.company}</span>
                        </div>
                        <div className="timeline-info">
                          <span className="location">{exp.location}</span>
                          <span className="period">{exp.period}</span>
                        </div>
                      </div>
                      <div className="card-content">
                        <ul className="achievement-list">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                        <div className="tech-stack">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="projects-section">
                  <h2>Featured Projects</h2>
                  <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project →
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="side-column">
                <section className="skills-section">
                  <h2>Technical Expertise</h2>
                  {resumeData.skills.technical.map((category, index) => (
                    <div key={index} className="skill-category">
                      <h3>{category.category}</h3>
                      <div className="skill-list">
                        {category.items.map((skill, i) => (
                          <div key={i} className="skill-item">
                            <span className="skill-name">{skill}</span>
                            <div className="skill-level-bar">
                              <div className="skill-level" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>

                <section className="certifications-section">
                  <h2>Certifications</h2>
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                      <div className="cert-header">
                        <h3>{cert.name}</h3>
                        <span className="cert-date">{cert.date}</span>
                      </div>
                      <span className="cert-issuer">{cert.issuer}</span>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        Verify Certificate →
                      </a>
                    </div>
                  ))}
                </section>

                <section className="publications-section">
                  <h2>Publications</h2>
                  {resumeData.publications.map((pub, index) => (
                    <div key={index} className="publication-item">
                      <h3>{pub.title}</h3>
                      <div className="pub-info">
                        <span>{pub.publisher}</span>
                        <span>•</span>
                        <span>{pub.year}</span>
                      </div>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        Read Article →
                      </a>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`resume-page ${isFullscreen ? 'fullscreen' : ''}`}>
      {!isFullscreen && (
        <div className="resume-controls">
          <div className="mode-selector">
            <select value={mode} onChange={handleModeChange} className="mode-select">
              {modeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="mode-description">
              {modeOptions.find(option => option.value === mode)?.description}
            </div>
          </div>
          <div className="resume-actions">
            {mode !== 'custom' && (
              <div className="preview-options">
                <button
                  className={`preview-btn ${previewType === 'screen' ? 'active' : ''}`}
                  onClick={() => handlePreviewClick('screen')}
                >
                  <FiEye />
                  <span>Screen Preview</span>
                </button>
                <button
                  className={`preview-btn pdf ${previewType === 'pdf' ? 'active' : ''}`}
                  onClick={() => handlePreviewClick('pdf')}
                >
                  <FiEye />
                  <span>PDF Preview</span>
                </button>
              </div>
            )}
            <button className="download-btn" onClick={handleDownload}>
              <FiDownload />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      )}

      {mode === 'custom' ? (
        <div className="pdf-preview custom-mode">
          {pdfUrl ? (
            <object data={pdfUrl} type="application/pdf" className="pdf-iframe">
              <embed src={pdfUrl} type="application/pdf" className="pdf-iframe" />
            </object>
          ) : (
            <div className="pdf-loading">
              <div className="loading-spinner"></div>
              <p>Loading PDF...</p>
            </div>
          )}
        </div>
      ) : (
        <>
          {previewType === 'screen' ? (
            <div className="resume-container" ref={resumeRef}>
              <div className={`resume-content mode-${mode}`}>
                <ResumeContent />
              </div>
            </div>
          ) : (
            <div className="pdf-preview">
              {pdfUrl ? (
                <object data={pdfUrl} type="application/pdf" className="pdf-iframe">
                  <embed src={pdfUrl} type="application/pdf" className="pdf-iframe" />
                </object>
              ) : (
                <div className="pdf-loading">
                  <div className="loading-spinner"></div>
                  <p>Generating PDF preview...</p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {isFullscreen && (
        <button className="exit-fullscreen" onClick={handleExitFullscreen}>
          <FiX />
          <span>Exit Preview</span>
        </button>
      )}

      {loading && (
        <div className="resume-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Resume;
