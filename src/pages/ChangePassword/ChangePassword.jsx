import React, { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash, FaCheck, FaTimes, FaExclamationCircle, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Extra.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    passwordMismatch: false,
  });
  const [passwordStrength, setPasswordStrength] = useState({
    text: "",
    score: 0,
  });
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // Refs for input fields
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    if (formData.newPassword) {
      checkPasswordRequirements(formData.newPassword);
    }
  }, [formData.newPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Mark field as touched
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }

    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (name === "newPassword") {
      checkPasswordStrength(value);
      checkPasswordRequirements(value);
    }

    if (name === "confirmPassword" && formData.newPassword !== value) {
      setErrors((prev) => ({
        ...prev,
        passwordMismatch: true,
        confirmPassword: "Passwords do not match"
      }));
    } else if (name === "confirmPassword" && formData.newPassword === value) {
      setErrors((prev) => ({
        ...prev,
        passwordMismatch: false,
        confirmPassword: ""
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = `${name === "oldPassword" ? "Old" : name === "newPassword" ? "New" : "Confirm"} password is required`;
      triggerErrorAnimation(name);
    } else if (name === "newPassword" && value.length < 8) {
      error = "Password must be at least 8 characters";
      triggerErrorAnimation(name);
    } else if (name === "confirmPassword" && formData.newPassword !== value) {
      error = "Passwords do not match";
      triggerErrorAnimation(name);
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const triggerErrorAnimation = (fieldName) => {
    const refs = {
      oldPassword: oldPasswordRef,
      newPassword: newPasswordRef,
      confirmPassword: confirmPasswordRef
    };

    if (refs[fieldName]?.current) {
      refs[fieldName].current.classList.add("error-shake");
      setTimeout(() => {
        refs[fieldName].current.classList.remove("error-shake");
      }, 500);
    }
  };

  const validateAllFields = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.oldPassword.trim()) {
      newErrors.oldPassword = "Old password is required";
      isValid = false;
      triggerErrorAnimation("oldPassword");
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
      isValid = false;
      triggerErrorAnimation("newPassword");
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
      isValid = false;
      triggerErrorAnimation("newPassword");
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
      triggerErrorAnimation("confirmPassword");
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.passwordMismatch = true;
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
      triggerErrorAnimation("confirmPassword");
    }

    setErrors(newErrors);
    setTouched({
      oldPassword: true,
      newPassword: true,
      confirmPassword: true
    });
    return isValid;
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const checkPasswordStrength = (password) => {
    let score = 0;
    let text = "";

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (password.length === 0) {
      text = "";
    } else if (score <= 2) {
      text = "Weak";
    } else if (score <= 4) {
      text = "Medium";
    } else {
      text = "Strong";
    }

    setPasswordStrength({ text, score });
  };

  const checkPasswordRequirements = (password) => {
    setRequirements({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[^A-Za-z0-9]/.test(password),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAllFields()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Password change submitted:", formData);
      setIsSubmitting(false);

      document.querySelector('.change-password-card').classList.add('success-animation');
      setTimeout(() => {
        document.querySelector('.change-password-card').classList.remove('success-animation');
        alert("Password changed successfully!");

        // Reset form
        setFormData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setErrors({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
          passwordMismatch: false,
        });
        setPasswordStrength({
          text: "",
          score: 0,
        });
        setRequirements({
          length: false,
          uppercase: false,
          lowercase: false,
          number: false,
          specialChar: false,
        });
        setTouched({
          oldPassword: false,
          newPassword: false,
          confirmPassword: false
        });
      }, 1500);
    }, 1000);
  };

  return (
    <div className="change-password-container">
      <motion.div
        className="change-password-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-4 text-white">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          {/* Old Password Field */}
          <div className="mb-3 password-input-group">
            <label htmlFor="oldPassword" className="form-label text-white-50">
              Enter Old Password
            </label>
            <div className="input-container">
              <div className={`input-with-icon ${errors.oldPassword && touched.oldPassword ? 'error' : ''}`}>
                <div className="icon-container">
                  <FaLock className="input-icon" />
                  <input
                    ref={oldPasswordRef}
                    type={showPassword.oldPassword ? "text" : "password"}
                    id="oldPassword"
                    name="oldPassword"
                    className="custom-input"
                    placeholder="Enter your old password"
                    value={formData.oldPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <AnimatePresence>
                    {errors.oldPassword && touched.oldPassword && (
                      <motion.span
                        className="error-icon"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaExclamationCircle />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.button
                    type="button"
                    className="password-toggle-icon"
                    onClick={() => togglePasswordVisibility("oldPassword")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword.oldPassword ? <FaEyeSlash /> : <FaEye />}
                  </motion.button>
                </div>
              </div>
              <AnimatePresence>
                {errors.oldPassword && touched.oldPassword && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.oldPassword}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* New Password Field */}
          <div className="mb-3 password-input-group">
            <label htmlFor="newPassword" className="form-label text-white-50">
              Enter New Password
            </label>
            <div className="input-container">
              <div className={`input-with-icon ${errors.newPassword && touched.newPassword ? 'error' : ''}`}>
                <div className="icon-container">
                  <FaLock className="input-icon" />
                  <input
                    ref={newPasswordRef}
                    type={showPassword.newPassword ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    className="custom-input"
                    placeholder="Enter your new password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <AnimatePresence>
                    {errors.newPassword && touched.newPassword && (
                      <motion.span
                        className="error-icon"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaExclamationCircle />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.button
                    type="button"
                    className="password-toggle-icon"
                    onClick={() => togglePasswordVisibility("newPassword")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
                  </motion.button>
                </div>
              </div>
              {passwordStrength.text && (
                <motion.div
                  className={`password-strength ${passwordStrength.text.toLowerCase()} mt-2 p-1 rounded`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {passwordStrength.text} strength
                </motion.div>
              )}
              {formData.newPassword && (
                <motion.div
                  className="password-requirements mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white-50 mb-2">Password must contain:</p>
                  <ul className="list-unstyled">
                    <motion.li
                      className={requirements.length ? "text-success" : "text-danger"}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {requirements.length ? <FaCheck /> : <FaTimes />} At least 8 characters
                    </motion.li>
                    <motion.li
                      className={requirements.uppercase ? "text-success" : "text-danger"}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {requirements.uppercase ? <FaCheck /> : <FaTimes />} Uppercase letter
                    </motion.li>
                    <motion.li
                      className={requirements.lowercase ? "text-success" : "text-danger"}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {requirements.lowercase ? <FaCheck /> : <FaTimes />} Lowercase letter
                    </motion.li>
                    <motion.li
                      className={requirements.number ? "text-success" : "text-danger"}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {requirements.number ? <FaCheck /> : <FaTimes />} Number
                    </motion.li>
                    <motion.li
                      className={requirements.specialChar ? "text-success" : "text-danger"}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {requirements.specialChar ? <FaCheck /> : <FaTimes />} Special character
                    </motion.li>
                  </ul>
                </motion.div>
              )}
              <AnimatePresence>
                {errors.newPassword && touched.newPassword && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.newPassword}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 password-input-group">
            <label htmlFor="confirmPassword" className="form-label text-white-50">
              Confirm New Password
            </label>
            <div className="input-container">
              <div className={`input-with-icon ${(errors.confirmPassword || errors.passwordMismatch) && touched.confirmPassword ? 'error' : ''}`}>
                <div className="icon-container">
                  <FaLock className="input-icon" />
                  <input
                    ref={confirmPasswordRef}
                    type={showPassword.confirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="custom-input"
                    placeholder="Confirm your new password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <AnimatePresence>
                    {(errors.confirmPassword || errors.passwordMismatch) && touched.confirmPassword && (
                      <motion.span
                        className="error-icon"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaExclamationCircle />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.button
                    type="button"
                    className="password-toggle-icon"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </motion.button>
                </div>
              </div>
              <AnimatePresence>
                {(errors.confirmPassword || errors.passwordMismatch) && touched.confirmPassword && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.confirmPassword || "Passwords do not match"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary w-100 mb-3 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              "Change Password"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ChangePassword;