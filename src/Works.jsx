import React from 'react';

import './assets/styles/modules/Works.scss';

import stollenhelden from './assets/images/prj-stollenhelden.png';
import thomas from './assets/images/prj-thomasandfriends.png';
import clinton from './assets/images/prj-clintonharn.png';


const Works = () => {
  return(
    <div className="works-wrapper centered">
      <div className="works-content">
        <h2 className="works-title">Selected Works</h2>
        <p className="works-intro">
          These are a few recent projects I've worked on. 
          Please click each thumbnail for more info. 
          If you would like to see more, and there is much, 
          much more, feel free to reach out.
        </p>
        
        <div className="works-grid">
          <div className="works-project featured-project">
            <img src={stollenhelden} alt="Stollenhelden" />
          </div>
          <div className="works-project">
            <img src={thomas} alt="PBS Kids - Thomas and Friends" />
            <img src={clinton} alt="Clinton Harn" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works;
