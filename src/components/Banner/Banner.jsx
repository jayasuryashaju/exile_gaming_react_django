// Banner.jsx
import React from 'react';
import './Banner.css';
import backgroundImage from '../../assets/banner-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Banner() {
    return (
        <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="banner-left">
                <h5>SHADOWFALL EXPANSION PACK</h5>
                <h1>WE FALL.</h1>
                <h1>THEN WE RISE.</h1>
                <h6>Losing is just an opportunity to shine brighter. Shine with us in the most devoted gaming community</h6>
                <div className="banner-buttons">
                    <button className='btn-register'>REGISTER NOW</button>
                    <button className='btn-discover'>DISCOVER MORE</button>
                </div>
            </div>
            <div className="banner-right">
                <div className="social-icons">
                    <div className="circle-container">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='icon' ><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                    <div className="circle-container">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    <div className="circle-container">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <div className="circle-container">
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
                <div className="discord-icon">
                    <a href="https://discord.com/" target="_blank" className='icon' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <div className="discord-text">
                        <h4>Join Our</h4>
                        <h4>Discord Server</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
