import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="camera-icon">&#128247;</div>
                </div>
                <div className="profile-form">
                    <label>First Name</label>
                    <input type="text" value="Sarah" />

                    <label>Last Name</label>
                    <input type="text" value="Johnson" />

                    <label>Email Address</label>
                    <input type="email" value="sarah.johnson@example.com" />
                    <a href="#" className="change-email">Change Email</a>

                    <label>Contact Number</label>
                    <input type="tel" value="+1 (555) 123-4567" />

                    <label>Gender</label>
                    <select>
                        <option value="female" selected>Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>

                    <button className="change-password">Change Password</button>
                    <button className="save-changes">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
