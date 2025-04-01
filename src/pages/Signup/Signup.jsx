import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    // Validation Functions
    const validateFirstName = () => {
        if (!formData.firstName.trim()) return "First name is required";
        if (formData.firstName.length < 2) return "Minimum 2 characters";
        return "";
    };

    const validateLastName = () => {
        if (!formData.lastName.trim()) return "Last name is required";
        if (formData.lastName.length < 2) return "Minimum 2 characters";
        return "";
    };

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) return "Email is required";
        if (!emailPattern.test(formData.email)) return "Invalid email format";
        return "";
    };

    const validatePassword = () => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!formData.password.trim()) return "Password is required";
        if (!passwordPattern.test(formData.password))
            return "8+ chars with 1 uppercase, number & special character";
        return "";
    };

    const validateConfirmPassword = () => {
        if (!formData.confirmPassword.trim()) return "Confirm your password";
        if (formData.password !== formData.confirmPassword) return "Passwords don't match";
        return "";
    };

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
        validateField(field);
    };

    const validateField = (field) => {
        let error = "";
        switch (field) {
            case "firstName": error = validateFirstName(); break;
            case "lastName": error = validateLastName(); break;
            case "email": error = validateEmail(); break;
            case "password": error = validatePassword(); break;
            case "confirmPassword": error = validateConfirmPassword(); break;
            default: break;
        }
        setErrors({ ...errors, [field]: error });
    };

    const validateAll = () => {
        const newErrors = {
            firstName: validateFirstName(),
            lastName: validateLastName(),
            email: validateEmail(),
            password: validatePassword(),
            confirmPassword: validateConfirmPassword(),
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAll()) {
            alert("Sign-Up Successful!");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (touched[name]) validateField(name);
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <i className="fas fa-user-circle signup-avatar"></i>
                    <h3 className="signup-title">Create Your Account</h3>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="signup-form-grid">
                        <div className="form-group">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                placeholder="Enter first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={() => handleBlur("firstName")}
                            />
                            {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                placeholder="Enter last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={() => handleBlur("lastName")}
                            />
                            {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                        </div>

                        <div className="form-group full-width">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={() => handleBlur("email")}
                            />
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>

                        <div className="form-group full-width">
                            <label className="form-label">Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Create password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur("password")}
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>

                        <div className="form-group full-width">
                            <label className="form-label">Confirm Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={() => handleBlur("confirmPassword")}
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>
                            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-3 py-2 login-btn text-white">
                        Sign Up
                    </button>

                    <div className="divider">
                        <span className="divider-text">or continue with</span>
                    </div>

                    <div className="social-buttons">
                        <button type="button" className="social-button google">
                            <i className="fab fa-google"></i>
                        </button>
                        <button type="button" className="social-button facebook">
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button type="button" className="social-button apple">
                            <i className="fab fa-apple"></i>
                        </button>
                    </div>

                    <div className="login-link">
                        Already have an account? <a href="#" className="login-link-text">Log in</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;