import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

// import HeroImage from '../../assets/hero-image.jpg'



const Hero = () => {
    return (
        <>
        <div className='hero'>
        {/* <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />             */}
            <div className="hero-container">
                <div className="content">
                    
                <Fade top><h1>ROCKLIN REHAB</h1></Fade> 
                <Fade bottom>
                    <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY </h2>
                    <p>Find your happiness and learn to put it first.</p>
                </Fade>

                    <Link to="/treatment"><button>Learn More</button></Link>
                </div>
            </div>
        </div>


        </>
    )
}

export default Hero


// .hero {
//     width: 100%;
//     height: 80vh;
//     background: rgba(0, 0, 0, .4);
//     position: relative;
// }

// .hero:before {
//     content: '';
//     position: absolute;
//     background: url('../../assets/hero-image.webp') no-repeat center center/cover;
//     height: 100%;
//     width: 100%;
//     z-index: -1;
// }