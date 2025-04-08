import React, { useState, useEffect, ChangeEvent } from 'react';
import classNames from 'classnames';
import FormInput from '../FormInput/FormInput';
import FormInputSelect from '../FormInputSelect/FormInputSelect';
import styles from './contact-form.module.scss';
import FormTextArea from '../FormTextArea/FormTextArea';

interface FormData {
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
  submit?: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const MAX_LENGTHS = {
  name: 50,
  email: 100,
  subject: 100,
  message: 1000,
};

const INPUT_ICONS = {
  name: '👤',
  email: '📧',
  subject: '📝',
  message: '💭',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (formSubmitted && submitSuccess) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
        setSubmitSuccess(false);
        setFormData(INITIAL_FORM_DATA);
        setTouched({});
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted, submitSuccess]);

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters long';
        }
        break;
    }

    if (value.length > MAX_LENGTHS[name as keyof typeof MAX_LENGTHS]) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is too long`;
    }

    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formSubmitted) {
      setFormSubmitted(false);
      setSubmitSuccess(false);
    }

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      email: e.target.value,
    }));
    setFormSubmitted(false);
    setSubmitSuccess(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setFocusedField(null);

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(e.target.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (hasErrors) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to send message. Please try again.',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    if (focusedField === fieldName) return 'focused';
    if (!touched[fieldName]) return '';
    if (errors[fieldName]) return 'error';
    if (formData[fieldName]) return 'success';
    return 'empty';
  };

  const getCharacterCount = (fieldName: keyof FormData) => {
    const count = formData[fieldName].length;
    const max = MAX_LENGTHS[fieldName];
    const remaining = max - count;
    const isNearLimit = remaining <= max * 0.1;
    const isAtLimit = remaining <= 0;

    return {
      remaining,
      isNearLimit,
      isAtLimit,
    };
  };

  return (
    <form className={styles['contact-form']} onSubmit={handleSubmit}>
      <FormInput
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter your name..."
        type="text"
        icon="👤"
        label="Name"
        error={errors.name}
        touched={touched.name}
        status={getFieldStatus('name')}
        maxLength={MAX_LENGTHS.name}
      />
      <FormInputSelect
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleEmailChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter your email..."
        icon="📧"
        label="Email"
        error={errors.email}
        touched={touched.email}
        status={getFieldStatus('email')}
        maxLength={MAX_LENGTHS.email}
      />
      <FormInput
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter your subject..."
        type="text"
        icon="📝"
        label="Subject"
        error={errors.subject}
        touched={touched.subject}
        status={getFieldStatus('subject')}
        maxLength={MAX_LENGTHS.subject}
      />
      <FormTextArea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter your message..."
        icon="💭"
        label="Message"
        error={errors.message}
        touched={touched.message}
        status={getFieldStatus('message')}
        maxLength={MAX_LENGTHS.message}
        characterCount={getCharacterCount('message')}
      />
      <button
        type="submit"
        className={classNames(styles['submit-button'], {
          [styles.loading]: isLoading,
          [styles.success]: submitSuccess,
        })}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : submitSuccess ? 'Sent!' : 'Send Message'}
      </button>

      {formSubmitted && (
        <div
          className={classNames(styles['status-message'], {
            [styles.success]: submitSuccess,
            [styles.error]: !submitSuccess && errors.submit,
          })}
        >
          {submitSuccess ? 'Thank you! Your message has been sent successfully.' : errors.submit}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
