import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaVenus, FaLock, FaSave, FaEdit, FaCamera, FaUser } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Arjun',
        lastName: 'Krishna',
        email: 'User@example.com',
        phone: '+91 1231231211',
        gender: 'male',
        profileImage: 'https://lunaf.com/img/moon/m-phase-16.webp'
    });
    const [previewImage, setPreviewImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        if (previewImage) {
            setFormData({ ...formData, profileImage: previewImage });
            setPreviewImage(null);
        }
    };

    return (
        <motion.div
            className="profile-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="header-spacer" style={{ height: '80px' }}></div>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <motion.div
                    className="card profile-card"
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
                            <div className="profile-avatar-container">
                                {previewImage ? (
                                    <img src={previewImage} alt="Preview" className="profile-avatar" />
                                ) : formData.profileImage ? (
                                    <img src={formData.profileImage} alt="Profile" className="profile-avatar" />
                                ) : (
                                    <div className="profile-avatar">
                                        <FaUser className="avatar-icon" />
                                    </div>
                                )}
                                {isEditing && (
                                    <motion.label
                                        className="avatar-edit-btn"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <FaCamera />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="d-none"
                                        />
                                    </motion.label>
                                )}
                            </div>
                            <h1 className="profile-title">
                                {formData.firstName} {formData.lastName}
                            </h1>
                        </motion.div>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <motion.div
                                    className="col-md-6 mb-3"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label className="profile-label">First Name</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="profile-input"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <div className="profile-info">{formData.firstName}</div>
                                    )}
                                </motion.div>

                                <motion.div
                                    className="col-md-6 mb-3"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <label className="profile-label">Last Name</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="profile-input"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <div className="profile-info">{formData.lastName}</div>
                                    )}
                                </motion.div>
                            </div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <label className="profile-label">Email Address</label>
                                    <motion.button
                                        type="button"
                                        className="profile-change-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaEnvelope className="me-1" /> Change Email
                                    </motion.button>
                                </div>
                                <div className="profile-info">{formData.email}</div>
                            </motion.div>

                            <motion.div
                                className="mb-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <label className="profile-label">Contact Number</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="phone"
                                        className="profile-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <div className="profile-info">{formData.phone}</div>
                                )}
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.0 }}
                            >
                                <label className="profile-label">Gender</label>
                                {isEditing ? (
                                    <select
                                        name="gender"
                                        className="profile-input"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                    </select>
                                ) : (
                                    <div className="profile-info">
                                        <FaVenus className="me-2" /> {formData.gender}
                                    </div>
                                )}
                            </motion.div>

                            <motion.div
                                className="mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1 }}
                            >
                                <motion.button
                                    type="button"
                                    className="profile-change-btn w-100"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaLock className="me-1" /> Change Password
                                </motion.button>
                            </motion.div>

                            <div className="d-flex gap-3">
                                {isEditing ? (
                                    <>
                                        <motion.button
                                            type="submit"
                                            className="profile-save-btn flex-grow-1"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.2 }}
                                        >
                                            <FaSave className="me-2" /> Save Changes
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            className="profile-cancel-btn flex-grow-1"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsEditing(false)}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.3 }}
                                        >
                                            Cancel
                                        </motion.button>
                                    </>
                                ) : (
                                    <motion.button
                                        type="button"
                                        className="profile-edit-btn w-100"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsEditing(true)}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        <FaEdit className="me-2" /> Edit Profile
                                    </motion.button>
                                )}
                            </div>
                        </form>
                    </div>

                </motion.div>

            </div>
            <div className="header-spacer" style={{ height: '80px' }}></div>
        </motion.div>
    );
};

export default Profile;