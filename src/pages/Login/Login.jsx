import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [touched, setTouched] = useState({
        email: false,
        password: false
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate on change if the field has been touched
        if (touched[name]) {
            validateField(name, value);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';

        if (name === 'email') {
            if (!value) {
                error = 'Email or phone number is required';
            } else if (!isValidEmail(value) && !isValidPhone(value)) {
                error = 'Please enter a valid email or phone number';
            }
        } else if (name === 'password') {
            if (!value) {
                error = 'Password is required';
            } else if (value.length < 6) {
                error = 'Password must be at least 6 characters';
            }
        }

        setErrors({
            ...errors,
            [name]: error
        });
    };

    const isValidEmail = (email) => {
        // Simple email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const isValidPhone = (phone) => {
        // Simple phone regex - accepts 10 digits, optionally with spaces, dashes or parentheses
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mark all fields as touched to show errors
        setTouched({
            email: true,
            password: true
        });

        // Validate all fields
        validateField('email', formData.email);
        validateField('password', formData.password);

        // Check if form is valid
        if (isValidEmail(formData.email) || isValidPhone(formData.email) && formData.password.length >= 6) {
            // Form is valid, proceed with login
            console.log('Form submitted:', formData);
            // Here you would typically call your authentication API
        }
    };

    return (
        <div className="login-container dark-theme">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card login-card">
                    <div className="card-body p-4 p-md-5">
                        <h1 className="text-center mb-4 text-white">Login</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 input-with-icon">
                                <label htmlFor="email" className="form-label text-light">Email or phone number</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fas fa-envelope text-muted"></i>
                                    </span>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className={`form-control dark-input no-focus-outline ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter your email or phone number"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {touched.email && errors.email && (
                                    <div className="invalid-feedback d-block" style={{ fontSize: '0.8rem' }}>
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3 input-with-icon">
                                <label htmlFor="password" className="form-label text-light">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="fas fa-lock text-muted"></i>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        className={`form-control dark-input no-focus-outline ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <button
                                        className="btn btn-outline-secondary toggle-password"
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                    </button>
                                </div>
                                {touched.password && errors.password && (
                                    <div className="invalid-feedback d-block" style={{ fontSize: '0.8rem' }}>
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="d-flex justify-content-end mb-4">
                                <a href="#" className="text-decoration-none forgot-password text-info">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-3 py-2 login-btn text-white">
                                Login
                            </button>
                        </form>

                        <div className="d-flex align-items-center my-4">
                            <hr className="flex-grow-1 border-light" />
                            <span className="px-3 text-muted">or continue with</span>
                            <hr className="flex-grow-1 border-light" />
                        </div>

                        <div className="social-icons-container d-flex justify-content-center gap-3 mb-4">
                            <button className="social-icon-btn">
                                <i className="fab fa-google"></i>
                            </button>
                            <button className="social-icon-btn">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className="social-icon-btn">
                                <i className="fab fa-yahoo"></i>
                            </button>
                        </div>

                        <div className="text-center mt-3 text-light">
                            Don't have an account? <a href="#" className="text-decoration-none signup-link text-info">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;