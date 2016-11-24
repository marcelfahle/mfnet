import React from 'react';

import './assets/styles/modules/About.scss';
import mf from './assets/images/mf-about.jpg';

const About = () => {
  return (
    <div className="about-wrapper">

      <div className="about-wrapper__photo">
        <img src={mf} alt="Marcel Fahle - About" />
      
      </div>
      <div className="about-wrapper__content">
        <h2 className="about__title">About me</h2>
				<p>
					I am a Full-Stack-Developer with 17+ years of experience. My adventures in code led me from  early experiments in Perl to many years working with Flash/ActionScript and PHP.
				</p>

				<p>
					But that was only until I discovered the beautiful Ruby language, which became my weapon of choice for years to come, often paired with the powerful Ruby on Rails Framework.
				</p>

				<p>
					While always keeping a strong Frontend foundation, I nowadays feel more at home in Full JavaScript Stacks, challenging myself with functional programming concepts, serverless architectures, reactivity and performance. 
				</p>

				<p>
					Besides all of that, I love to read, run, travel and all things cinematography.
				</p>

				<p>
					And yes, I am for hire. Hit me up, don’t be shy! :-)
				</p>
      </div>
    </div>
  )
}
export default About;
