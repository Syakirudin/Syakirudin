import React, { useState } from 'react';
import './styles/detailComponent.css';
import AboutMeComponent from './homeComponents/aboutMeComponent';
import StackComponent from './homeComponents/stackComponent';
import { AnimatePresence } from 'framer-motion';

const DetailComponent = () => {
    // State to manage the visibility of the AboutMeComponent and StackComponent
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showStack, setShowStack] = useState(false);

    return (
        <div className='detail-component'>
            <div className="grid-container">
                <div
                    className="inner-box div1"
                    onClick={() => setShowAboutMe(true)} // Show AboutMeComponent on click
                >
                    <p>About ME</p>
                </div>
                <div
                    className="inner-box div2"
                    onClick={() => setShowStack(true)} // Show StackComponent on click
                >
                    <p>Stack Choice</p>
                </div>
                <div className="inner-box div3"><p>Projects</p></div>
                <div className="inner-box div4"><p>Blogs</p></div>
                <div className="inner-box div5"><p>Playground</p></div>
                <div className="inner-box div6"><p>Coming soon...lol</p></div>             
            </div>

            {/* Conditionally render the AboutMeComponent and StackComponent based on state */}
            <AnimatePresence>
                {showAboutMe && (
                    <div className="overlay">
                        <AboutMeComponent setShowAboutMe={setShowAboutMe} />
                    </div>
                )}
                {showStack && (
                    <div className="overlay">
                        <StackComponent setShowStack={setShowStack} />
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DetailComponent;
