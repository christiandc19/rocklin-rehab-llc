import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";



const About = () => {

    return (
            <>
            <div className='about main-menu'>
                    <div className="container">
                        <div className="main-menu-content">
                            <Fade top>
                                <h1>WHO WE ARE</h1>

                                <p>Rocklin Rehab Center strives to make sobriety less stressful by focusing on sobriety. We utilize established medical treatments to help you get sober and stay sober. Contra Costa Rehab Center helps you taper in a safe, structured environment. We are there for you, through every stage of recovery. No matter where you’re located, you can reach out and get in touch with someone from our staff today.</p>
                            </Fade>
                        </div>
                    </div>
            </div>
            <ContactForm />
            </>
    )

    }
export default About
