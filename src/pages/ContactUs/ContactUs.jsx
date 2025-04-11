import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const contactImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    query: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    query: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;

      case 'contact':
        if (!value.trim()) {
          error = 'Email or phone number is required';
        } else if (!validateEmail(value) && !validatePhone(value)) {
          error = 'Please enter a valid email or phone number';
        }
        break;

      case 'query':
        if (!value.trim()) {
          error = 'Query is required';
        } else if (value.trim().length < 10) {
          error = 'Query should be at least 10 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate the field as user types
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', contact: '', query: '' };

    // Validate all fields
    newErrors.name = validateField('name', formData.name);
    newErrors.contact = validateField('contact', formData.contact);
    newErrors.query = validateField('query', formData.query);

    // Check if any errors exist
    if (newErrors.name || newErrors.contact || newErrors.query) {
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', contact: '', query: '' });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title animate-fade">Contact Us</h1>

      <div className="contact-container">
        {/* Image Section */}
        <div className="contact-image-container animate-slide-left">
          <img
            src={contactImage}
            alt="Contact us"
            className="contact-image"
          />
        </div>

        {/* Form Section */}
        <div className="contact-form-container animate-slide-right">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => validateField('name', formData.name)}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact" className="form-label">Email ID / Contact Number</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className={`form-input ${errors.contact ? 'is-invalid' : ''}`}
                placeholder="Enter your email or phone number"
                value={formData.contact}
                onChange={handleChange}
                onBlur={() => validateField('contact', formData.contact)}
              />
              {errors.contact && <span className="error-message">{errors.contact}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="query" className="form-label">Query / Suggestion</label>
              <textarea
                id="query"
                name="query"
                className={`form-input form-textarea ${errors.query ? 'is-invalid' : ''}`}
                placeholder="Write your message here"
                value={formData.query}
                onChange={handleChange}
                onBlur={() => validateField('query', formData.query)}
              />
              {errors.query && <span className="error-message">{errors.query}</span>}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Submitting...
                </>
              ) : 'Submit'}
            </button>

            {submitSuccess && (
              <div className="submit-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;