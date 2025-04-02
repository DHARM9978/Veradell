import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaYahoo } from 'react-icons/fa';
import { motion } from 'framer-motion';
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

        if (touched[name]) {
            validateField(name, value);
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
        validateField(name, e.target.value);
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
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const isValidPhone = (phone) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            email: true,
            password: true
        });

        validateField('email', formData.email);
        validateField('password', formData.password);

        if ((isValidEmail(formData.email) || isValidPhone(formData.email)) && formData.password.length >= 6) {
            console.log('Form submitted:', formData);
            // Add your authentication logic here
        }
    };

    return (
        <motion.div
            className="login-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="header-spacer" style={{ height: '80px' }}></div>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <motion.div
                    className="card login-card"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="card-body p-4 p-md-5">
                        <motion.h1
                            className="text-center mb-4 text-white"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: 'spring' }}
                        >
                            Login
                        </motion.h1>

                        <form onSubmit={handleSubmit}>
                            <motion.div
                                className="mb-4"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <label htmlFor="email" className="form-label text-light mb-2">Email or phone number</label>
                                <div className="input-container">
                                    <div className={`input-wrapper ${touched.email && errors.email ? 'error' : ''}`}>
                                        <FaEnvelope className="input-icon" />
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="custom-input"
                                            placeholder="Enter your email or phone number"
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
                                className="mb-4"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
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
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <button
                                            type="button"
                                            className="toggle-btn"
                                            onClick={togglePasswordVisibility}
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
                                className="d-flex justify-content-end mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <a href="#" className="text-decoration-none text-info">Forgot password?</a>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary w-100 mb-3 py-2 login-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                Login
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
                            Don't have an account? <a href="#" className="text-decoration-none text-info">Sign up</a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Login;