import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.css'

function Banner() {
    return (
        <header>
            <div class="banner-container">
                <div class="logo">
                    <h1>
                        Prepare for Java Cert 
                        <FontAwesomeIcon className="icon" icon="fa-brands fa-java" />
                    </h1>
                </div>
                <div class="contact">
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </header>

    );
}

export default Banner;