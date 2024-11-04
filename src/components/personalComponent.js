// PersonalComponent.js
import React from 'react';
import './styles/personalComponent.css';
import profilePic from '../assets/profile.png';
import resume from '../assets/resume.pdf';


// Import FontAwesome and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const PersonalComponent = () => {
    return (
        <div className='personal-component'>
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <h2>Muhamad Syakirudin</h2>
            <p>"From Circuits to Code: Crafting Functional Design"</p>

            <div className="social-icons">
                <a href="https://github.com/Syakirudin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/msyakirudin/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/msyakirudin/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href={resume} download="Muhamad_Syakirudin_Resume.pdf">
                <FontAwesomeIcon icon={faFile} />
                </a>
            </div>
        </div>
    );
};

export default PersonalComponent;
