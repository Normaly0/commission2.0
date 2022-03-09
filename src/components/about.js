import React from 'react';
import './about.scss';

function About() {
    return(
            <section className= 'about-section'>
                <div className= 'about-section-text'>
                    <h2 className="sub-title">Heya and welcome to my page!</h2>
                    <p>               
                        I'm Normaly...or Norm, whichever you want! A 3D artist and aspiring web
                        dev currently living in Berlin and working on moving to Stockholm in the near future.
                    </p>
                    <p>
                        Aside from that you'll probably find me on some VR dance 
                        floor having a blast during the weekends.
                    </p>
                    <p>
                        What I do:
                    </p>
                        <ul>
                            <li>Avatar Retextures</li>
                            <li>3D Modeling (Accessories/Clothing)</li>
                            <li>Creation of Photorealistic Renders</li>
                        </ul>                   
                    <p>
                        Where to find me:
                    </p>
                        <div className="links">
                        <a href="https://twitter.com/Normaly0" target="_blank" className="highlight">
                            <i className="fab fa-twitter"></i>
                            Twitter
                        </a>
                        <a href="https://t.me/normalv" target="_blank" className="highlight">
                            <i className="fab fa-telegram"></i>
                            Telegram
                        </a>
                        <a href="https://discordapp.com/users/220575802868105218/" target="_blank" className="highlight">
                            <i className="fab fa-discord"></i>
                            Discord
                        </a>
                        <a href="https://github.com/Normaly0" target="_blank" className="highlight">  
                            <i className="fab fa-github"></i>
                            Github
                        </a>
                        </div>        
                </div>
                <div className="about-section-img">
                    <img src="Norm Profile Pic.png" alt="Normaly's Profile Picture" />
                </div>
            </section>
    )
}

export default About;