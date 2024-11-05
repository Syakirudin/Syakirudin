import React from 'react';
import './styles/stackComponent.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

const StackComponent = ({ setShowStack }) => {
    return (
        <motion.div 
            className="stack-use"
            initial={{ opacity: 0, scale: 0.8 }}  
            animate={{ opacity: 1, scale: 1 }}     
            exit={{ opacity: 0, scale: 0.8 }}       
            transition={{ duration: 0.3 }}           
        >
            <button className="close-btn" onClick={() => setShowStack(false)}>
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
            <h2>Stack Choice</h2>  
            <p>Here, you can describe the technologies you use in your projects.</p>

            <div className="tech-icons">
                <i className="fab fa-html5" style={{ color: "#E34F26" }} title="HTML"></i>
                <i className="fab fa-css3-alt" style={{ color: "#1572B6" }} title="CSS"></i>
                <i className="fab fa-js" style={{ color: "#F7DF1E" }} title="JavaScript"></i>
                <i className="fab fa-python" style={{ color: "#3776AB" }} title="Python"></i>
                <i className="fab fa-arduino" style={{ color: "#A6C8E0" }} title="Arduino"></i>
                <i className="fab fa-cuttlefish" style={{ color: "#00599C" }} title="C++"></i>
                <i className="fab fa-react" style={{ color: "#61DBFB" }} title="React"></i>
                <i className="fab fa-node-js" style={{ color: "#8CC84B" }} title="Node.js"></i>
                <i className="fas fa-database" style={{ color: "#003B57" }} title="MySQL"></i>
                <i className="fas fa-database" style={{ color: "#336791" }} title="PostgreSQL"></i>
                <i className="fab fa-postman" style={{ color: "#FF6C37" }} title="Postman"></i>
                <i className="fas fa-file-excel" style={{ color: "#57A64A" }} title="Excel"></i>
            </div>
        </motion.div>
    ); 
};

export default StackComponent;
