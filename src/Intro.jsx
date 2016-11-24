import React from 'react';

import './assets/styles/modules/Intro.scss';

const Intro = () => {
  return(
    <div className="Intro">
      
      <h1 className="site-title"><a href="/">Marcel Fahle</a></h1>

      <h2 className="site-description">
        Full-Stack-Developer from Germany who loves travel, 
        <br/>code, running and books. Currently living in <del>Bochum</del>&nbsp;
        <del>NYC</del> <del>Vilnius</del> <strong>Denia</strong>.
      </h2>

      <p className="site-contact">
        You can reach me best by 
        <a href="mailto:m.fahle@gmail.com"> email </a> or 
        <a href="skype:marcelfahle?userinfo"> skype</a>. 
          My adventures in code and
        life are best documented on 
        <a href="https://twitter.com/marcelfahle" target="_blank"> Twitter </a> 
        <a href="https://instagram.com/marcelfahle" target="_blank"> Instagram </a> 
        and 
        <a href="https://github.com/marcelfahle/" target="_blank"> Github</a>.   
      </p>
    </div>
  )
}

export default Intro;
