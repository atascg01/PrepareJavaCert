import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <ul className="social-icons">
                    <li><a href="https://teachingdev.com/" target="_blank"><FontAwesomeIcon icon="fa-solid fa-blog" /></a></li>
                    <li><a href="https://twitter.com/atascg" target="_blank"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                    <li><a href="https://github.com/atascg01" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
                    <li><a href="https://www.linkedin.com/in/andrestascon/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
                    
                </ul>
            </div>
        </footer>
    );
}

export default Footer;