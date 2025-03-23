import React, { useState, useRef, useEffect } from 'react';
import './Contact.scss';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  // Animation states
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [animateMap, setAnimateMap] = useState(false);

  // Form states
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Refs for animations
  const mapRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Set page as loaded with slight delay for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animate map when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimateMap(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters long' : undefined;
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Please enter a valid email address'
          : undefined;
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters long' : undefined;
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters long' : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    const error = validateField(name as keyof FormState, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleInputFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleInputBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const errors: FormErrors = {};
    (Object.entries(formState) as [keyof FormState, string][]).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setSubmitSuccess(false);
    setFormErrors({});
  };

  return (
    <div className={`contact-page ${isPageLoaded ? 'loaded' : ''}`}>
      <div className="contact-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <header className="contact-header">
          <h1 ref={titleRef} className="contact-title">
            Get in Touch
          </h1>
          <p className="contact-description">
            Have a question, feedback, or just want to say hello? Fill out the form below and we'll
            get back to you as soon as possible.
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>contact@fwxblog.com</p>
              <a href="mailto:contact@fwxblog.com" className="info-link">
                Send Email
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://twitter.com/fwxblog" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://github.com/fwxblog" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/fwxblog" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Response Time</h3>
              <p>Usually within 24-48 hours</p>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={formErrors.name ? 'error' : ''}
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className={formErrors.subject ? 'error' : ''}
              />
              {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className={formErrors.message ? 'error' : ''}
              />
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>

            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>

        <div ref={mapRef} className={`map-container ${animateMap ? 'animated' : ''}`}>
          <h2 className="map-title">Find Us Here</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6007827671656!2d-122.08429708472211!3d37.77646647975896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8b6c4fc4d149%3A0x33a6f3623d8fc112!2sTech%20Valley%2C%20San%20Francisco%2C%20CA%2094043!5e0!3m2!1sen!2sus!4v1615554537265!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our location"
            ></iframe>
          </div>

          <div className="business-hours">
            <h3>Business Hours</h3>
            <div className="hours-grid">
              <div className="day">Monday - Friday</div>
              <div className="hours">9:00 AM - 6:00 PM</div>
              <div className="day">Saturday</div>
              <div className="hours">10:00 AM - 4:00 PM</div>
              <div className="day">Sunday</div>
              <div className="hours">Closed</div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly do you respond to inquiries?</h3>
              <p>
                We strive to respond to all inquiries within 24 hours during business days. For
                urgent matters, please call us directly.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I request a custom project?</h3>
              <p>
                Absolutely! We love working on custom projects. Please provide as much detail as
                possible in your message about what you're looking for.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer consultations?</h3>
              <p>
                Yes, we offer both free initial consultations and more in-depth paid consulting
                services depending on your needs.
              </p>
            </div>
            <div className="faq-item">
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
