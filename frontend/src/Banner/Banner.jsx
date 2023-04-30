import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.css'

function Banner() {
    return (
        <header>
            <div className="banner-container">
                <div className="logo">
                    <h1>
                        Prepare for Java Cert 
                        <FontAwesomeIcon className="icon" icon="fa-brands fa-java" />
                    </h1>
                </div>
                <div className="contact">
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </header>

    );
}

export default Banner;