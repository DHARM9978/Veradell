import React from "react";
import { motion } from "framer-motion";
import "./About.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  return (
    <div className="about-page">
      {/* <div className="header-spacer" style={{ height: '80px' }}></div> */}

      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 variants={itemVariants}>About Us</motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Redefining Digital Experiences, One Innovation at a Time
        </motion.p>
      </motion.section>

      {/* Mission, Vision, Values Section */}
      <motion.section
        className="mission-vision-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="mv-container">
          <motion.div className="mv-card" variants={slideInLeft}>
            <h3>Our Mission</h3>
            <p>
              To revolutionize digital experiences through innovative technology
              solutions that empower businesses and delight users.
            </p>
          </motion.div>
          <motion.div className="mv-card" variants={fadeIn}>
            <h3>Our Vision</h3>
            <p>
              To be the global leader in creating transformative digital solutions
              that shape the future of technology and human interaction.
            </p>
          </motion.div>
          <motion.div className="mv-card" variants={slideInRight}>
            <h3>Our Values</h3>
            <p>
              We believe in innovation, integrity, and inclusivity. Our commitment
              to excellence drives everything we do.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        className="journey-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Our Journey</motion.h2>
        <motion.div className="journey-items">
          <motion.div className="journey-item" variants={slideInLeft}>
            <div className="year">2018</div>
            <div className="content">
              <h4>The Beginning</h4>
              <p>Founded with a vision to transform digital experiences</p>
            </div>
          </motion.div>
          <motion.div className="journey-item" variants={slideInRight}>
            <div className="year">2020</div>
            <div className="content">
              <h4>Global Expansion</h4>
              <p>Expanded operations to 15+ countries worldwide</p>
            </div>
          </motion.div>
          <motion.div className="journey-item" variants={slideInLeft}>
            <div className="year">2022</div>
            <div className="content">
              <h4>Innovation Milestone</h4>
              <p>Launched revolutionary AI-powered solutions</p>
            </div>
          </motion.div>
          <motion.div className="journey-item" variants={slideInRight}>
            <div className="year">2024</div>
            <div className="content">
              <h4>Future Forward</h4>
              <p>Leading the industry with cutting-edge technology</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="team-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Meet Our Team</motion.h2>
        <motion.div className="team-members">
          <motion.div className="team-member" variants={itemVariants}>
            <div className="member-image"></div>
            <h4>Alex Thompson</h4>
            <p>CEO & Founder</p>
          </motion.div>
          <motion.div className="team-member" variants={itemVariants}>
            <div className="member-image"></div>
            <h4>Sarah Chen</h4>
            <p>Head of Design</p>
          </motion.div>
          <motion.div className="team-member" variants={itemVariants}>
            <div className="member-image"></div>
            <h4>Michael Ross</h4>
            <p>Tech Lead</p>
          </motion.div>
          <motion.div className="team-member" variants={itemVariants}>
            <div className="member-image"></div>
            <h4>Emma Wilson</h4>
            <p>Product Manager</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Join Section */}
      <motion.section
        className="join-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.h2 variants={itemVariants}>Join Our Journey</motion.h2>
        <motion.p variants={itemVariants}>
          Be part of our story and help shape the future of digital innovation
        </motion.p>
        <motion.div className="join-buttons" variants={itemVariants}>
          <button className="subscribe-btn">Subscribe Newsletter</button>
          <button className="contact-btn">Contact Us</button>
        </motion.div>
      </motion.section>

      <div className="header-spacer" style={{ height: '80px' }}></div>
    </div>
  );
};

export default About;