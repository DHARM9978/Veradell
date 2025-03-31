import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container dark-theme">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card login-card">
                    <div className="card-body p-4 p-md-5">
                        <h1 className="text-center mb-4 text-white">Login</h1>

                        <div className="mb-3 input-with-icon">
                            <label htmlFor="email" className="form-label text-light">Email or phone number</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="fas fa-envelope text-muted"></i>
                                </span>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control dark-input no-focus-outline"
                                    placeholder="Enter your email or phone number"
                                />
                            </div>
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
                                    className="form-control dark-input no-focus-outline"
                                    placeholder="Enter your password"
                                />
                                <button
                                    className="btn btn-outline-secondary toggle-password"
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mb-4">
                            <a href="#" className="text-decoration-none forgot-password text-info">Forgot password?</a>
                        </div>

                        <button className="btn btn-primary w-100 mb-3 py-2 login-btn text-white">
                            Login
                        </button>

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