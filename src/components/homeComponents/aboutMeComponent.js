import React from 'react';
import '../styles/aboutMeComponent.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

const AboutMeComponent = ({ setShowAboutMe }) => {
    return (
        <motion.div 
            className="about-me"
            initial={{ opacity: 0, scale: 0.8 }}  // Start state (hidden and slightly smaller)
            animate={{ opacity: 1, scale: 1 }}     // End state (fully visible and normal size)
            exit={{ opacity: 0, scale: 0.8 }}       // Exit state (fade out and shrink)
            transition={{ duration: 0.3 }}           // Animation duration
        >
            <button className="close-btn" onClick={() => setShowAboutMe(false)}>
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <h2>About Me</h2>
            <p>
                An individual who is passionate about technology.
                
                <br></br>


            </p>
        </motion.div>
    ); 
};

export default AboutMeComponent;
