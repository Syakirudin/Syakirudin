// DetailComponent.js
import React from 'react';
import './styles/detailComponent.css';

const DetailComponent = () => {
    return (
        <div className='detail-component'>
            <div className="grid-container">
                <div className="inner-box div1"><p>About ME</p></div>
                <div className="inner-box div2"><p>My Stack of choice</p></div>
                <div className="inner-box div3"><p>Projects</p></div>
                <div className="inner-box div4"><p>Blogs</p></div>
                <div className="inner-box div5"><p>Playground</p></div>
                <div className="inner-box div6"><p>Coming soon...lol</p></div>             
                
            </div>
        </div>
    );
}

export default DetailComponent;
