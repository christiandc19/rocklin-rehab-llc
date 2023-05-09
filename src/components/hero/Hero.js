import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import LandingImage from '../../assets/landing-image.png'
import TopLeft from '../../assets/hero-bg-min.jpg'
import TopRight from '../../assets/method-bg-min.jpg'
import BotLeft from '../../assets/section5-image-min.jpg'
import BotRight from '../../assets/whatwedo-home.jpg'

import './Hero.css'

const Hero = () => {
    return (
<>        
        <div className='main-hero'>
        <div className='hero'>
            <div className="hero-container">
                <div className="content">


                <div className='content-left'>

                        <h1>ROCKLIN REHAB</h1>
                            <Fade left>
                        <h2>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                            </Fade>
                                <br />
                                <div className='hero-btn'>
                                <Link to="/contact">
                                <button>Call Us</button>
                                </Link>
                                </div>
                                <br />
                                <img src={LandingImage} alt="Friends" loading="lazy"/>                                
                                <br />
                                <p>"Your Road To Recovery Starts Here."</p>

                </div>



                <div class="gallery">
                <img src={TopLeft} alt="Friends" loading="lazy"/>
                <img src={TopRight} alt="Friends" loading="lazy"/>
                <img src={BotLeft} alt="Friends" loading="lazy"/>
                <img src={BotRight} alt="Friends" loading="lazy"/>
                </div>

                   
                
                    </div>




            </div>
        </div>

        </div>
</>

    )
}

export default Hero