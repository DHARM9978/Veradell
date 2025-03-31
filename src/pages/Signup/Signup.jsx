import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
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

    // Validation Function
    const validate = () => {
        let newErrors = {};

        if (formData.firstName.length < 2) {
            newErrors.firstName = "First name must be at least 2 characters";
        }

        if (formData.lastName.length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        const passwordPattern =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password =
                "Password must be at least 8 characters, include 1 uppercase, 1 number & 1 special character";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Sign-Up Successful!");
        }
    };

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card signup-card p-4">
                <div className="text-center mb-3">
                    <i className="fas fa-user-circle fa-3x text-light"></i>
                </div>
                <h3 className="text-center text-light">Sign Up</h3>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-label text-muted">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label text-muted">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="form-label text-muted">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>

                    <div className="mt-3 position-relative">
                        <label className="form-label text-muted">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="form-control"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <i
                            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} eye-icon`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>

                    <div className="mt-3 position-relative">
                        <label className="form-label text-muted">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            className="form-control"
                            placeholder="********"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <i
                            className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} eye-icon`}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        ></i>
                        {errors.confirmPassword && (
                            <p className="text-danger">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-4 signup-btn">
                        Sign Up
                    </button>

                    <p className="text-center text-muted mt-3">or continue with</p>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn social-btn google">
                            <i className="fab fa-google"></i> Google
                        </button>
                        <button className="btn social-btn facebook">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </button>
                        <button className="btn social-btn yahoo">
                            <i className="fab fa-yahoo"></i> Yahoo
                        </button>
                    </div>

                    <p className="text-center text-muted mt-3">
                        Already have an account? <a href="#" className="text-primary">Log in</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
