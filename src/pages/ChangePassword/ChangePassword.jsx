import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    passwordMismatch: false,
  });
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "newPassword") {
      checkPasswordStrength(value);
    }

    if (name === "confirmPassword" || name === "newPassword") {
      setErrors((prev) => ({ ...prev, passwordMismatch: false }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const checkPasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength("");
    } else if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({ passwordMismatch: true });
      return;
    }

    console.log("Password change submitted:", formData);
    alert("Password changed successfully!");
  };

  return (
    <div className="change-password-container">
      <div className="change-password-card">
        <h2 className="text-center mb-4 text-white">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 password-input-group">
            <label htmlFor="oldPassword" className="form-label text-white-50">
              Enter Old Password
            </label>
            <div className="input-with-icon">
              <input
                type={showPassword.oldPassword ? "text" : "password"}
                className="form-control bg-dark text-white border-dark"
                id="oldPassword"
                name="oldPassword"
                placeholder="Enter your old password"
                value={formData.oldPassword}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => togglePasswordVisibility("oldPassword")}
              >
                {showPassword.oldPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="mb-3 password-input-group">
            <label htmlFor="newPassword" className="form-label text-white-50">
              Enter New Password
            </label>
            <div className="input-with-icon">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                className="form-control bg-dark text-white border-dark"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => togglePasswordVisibility("newPassword")}
              >
                {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordStrength && (
              <div
                className={`password-strength ${passwordStrength.toLowerCase()} mt-2 p-1 rounded`}
              >
                {passwordStrength} strength
              </div>
            )}
          </div>

          <div className="mb-4 password-input-group">
            <label
              htmlFor="confirmPassword"
              className="form-label text-white-50"
            >
              Confirm New Password
            </label>
            <div className="input-with-icon">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                className="form-control bg-dark text-white border-dark"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.passwordMismatch && (
              <div className="text-danger mt-2">Passwords do not match</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3 py-2">
            Change Password
          </button>

          <div className="text-center">
            <a href="#forgot" className="text-decoration-none text-primary">
              Forgot your password? Click here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
