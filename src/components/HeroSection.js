import React from 'react';
import Button from './Button';
import '../App.css';
import '../css/HeroSection.css';
import {VIDEO2} from './Assets';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={VIDEO2.video2} autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--size">
                    Watch Trailer <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
