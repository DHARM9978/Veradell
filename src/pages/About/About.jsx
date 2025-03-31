import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p className="hero-subtitle">Redefining Digital Experiences, One Innovation at a Time</p>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="mission-vision-section">
        <div className="mv-container">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To revolutionize digital experiences through innovative technology 
              solutions that empower businesses and delight users.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To be the global leader in creating transformative digital solutions 
              that shape the future of technology and human interaction.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Values</h3>
            <p>
              We believe in innovation, integrity, and inclusivity. Our commitment 
              to excellence drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2>Our Journey</h2>
        <div className="journey-items">
          <div className="journey-item">
            <div className="year">2018</div>
            <div className="content">
              <h4>The Beginning</h4>
              <p>Founded with a vision to transform digital experiences</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="year">2020</div>
            <div className="content">
              <h4>Global Expansion</h4>
              <p>Expanded operations to 15+ countries worldwide</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="year">2022</div>
            <div className="content">
              <h4>Innovation Milestone</h4>
              <p>Launched revolutionary AI-powered solutions</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="year">2024</div>
            <div className="content">
              <h4>Future Forward</h4>
              <p>Leading the industry with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-image"></div>
            <h4>Alex Thompson</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h4>Sarah Chen</h4>
            <p>Head of Design</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h4>Michael Ross</h4>
            <p>Tech Lead</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h4>Emma Wilson</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
        <h2>Join Our Journey</h2>
        <p>Be part of our story and help shape the future of digital innovation</p>
        <div className="join-buttons">
          <button className="subscribe-btn">Subscribe Newsletter</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;