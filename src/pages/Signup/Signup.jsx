import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaYahoo } from "react-icons/fa";
import { motion } from "framer-motion";
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
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
        validateField(name, e.target.value);
    };

    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "firstName": error = validateFirstName(); break;
            case "lastName": error = validateLastName(); break;
            case "email": error = validateEmail(); break;
            case "password": error = validatePassword(); break;
            case "confirmPassword": error = validateConfirmPassword(); break;
            default: break;
        }
        setErrors({ ...errors, [name]: error });
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
        setIsSubmitting(true);

        // Mark all fields as touched
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            confirmPassword: true
        });

        if (validateAll()) {
            // Simulate API call
            setTimeout(() => {
                alert("Sign-Up Successful!");
                setIsSubmitting(false);
            }, 1000);
        } else {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (touched[name]) validateField(name, value);
    };

    return (
        <motion.div
            className="signup-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="header-spacer" style={{ height: '80px' }}></div>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <motion.div
                    className="card signup-card"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="card-body p-4 p-md-5">
                        <motion.div
                            className="text-center mb-4"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: 'spring' }}
                        >
                            <div className="signup-avatar">
                                <FaUser className="text-primary" size={40} />
                            </div>
                            <h1 className="text-white">Create Your Account</h1>
                        </motion.div>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <motion.div
                                    className="col-md-6 mb-3"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label htmlFor="firstName" className="form-label text-light mb-2">First Name</label>
                                    <div className="input-container">
                                        <div className={`input-wrapper ${touched.firstName && errors.firstName ? 'error' : ''}`}>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="custom-input"
                                                placeholder="Enter first name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.firstName && errors.firstName && (
                                            <motion.div
                                                className="error-message"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {errors.firstName}
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="col-md-6 mb-3"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <label htmlFor="lastName" className="form-label text-light mb-2">Last Name</label>
                                    <div className="input-container">
                                        <div className={`input-wrapper ${touched.lastName && errors.lastName ? 'error' : ''}`}>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="custom-input"
                                                placeholder="Enter last name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.lastName && errors.lastName && (
                                            <motion.div
                                                className="error-message"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {errors.lastName}
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label htmlFor="email" className="form-label text-light mb-2">Email</label>
                                <div className="input-container">
                                    <div className={`input-wrapper ${touched.email && errors.email ? 'error' : ''}`}>
                                        <FaEnvelope className="input-icon" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="custom-input"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {touched.email && errors.email && (
                                        <motion.div
                                            className="error-message"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {errors.email}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <label htmlFor="password" className="form-label text-light mb-2">Password</label>
                                <div className="input-container">
                                    <div className={`input-wrapper ${touched.password && errors.password ? 'error' : ''}`}>
                                        <FaLock className="input-icon" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            className="custom-input"
                                            placeholder="Create password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <button
                                            type="button"
                                            className="toggle-btn"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    {touched.password && errors.password && (
                                        <motion.div
                                            className="error-message"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {errors.password}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.0 }}
                            >
                                <label htmlFor="confirmPassword" className="form-label text-light mb-2">Confirm Password</label>
                                <div className="input-container">
                                    <div className={`input-wrapper ${touched.confirmPassword && errors.confirmPassword ? 'error' : ''}`}>
                                        <FaLock className="input-icon" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="custom-input"
                                            placeholder="Confirm password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <button
                                            type="button"
                                            className="toggle-btn"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    {touched.confirmPassword && errors.confirmPassword && (
                                        <motion.div
                                            className="error-message"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {errors.confirmPassword}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary w-100 mb-3 py-2 login-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Signing Up...
                                    </>
                                ) : 'Sign Up'}
                            </motion.button>
                        </form>

                        <motion.div
                            className="d-flex align-items-center my-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                        >
                            <hr className="flex-grow-1 border-secondary" />
                            <span className="px-3 text-light">or continue with</span>
                            <hr className="flex-grow-1 border-secondary" />
                        </motion.div>

                        <motion.div
                            className="social-icons-container d-flex justify-content-center gap-3 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                        >
                            <motion.button
                                className="social-icon-btn btn btn-outline-light"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGoogle />
                            </motion.button>
                            <motion.button
                                className="social-icon-btn btn btn-outline-light"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFacebookF />
                            </motion.button>
                            <motion.button
                                className="social-icon-btn btn btn-outline-light"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaYahoo />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="text-center mt-3 text-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                        >
                            Already have an account? <a href="#" className="text-decoration-none text-info">Log in</a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="header-spacer" style={{ height: '80px' }}></div>
        </motion.div>

    );
};

export default Signup;