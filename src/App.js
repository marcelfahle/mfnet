import React, { Component } from 'react';

import './assets/styles/modules/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1 className="site-title"><a href="/">Marcel Fahle</a></h1>

        <h2 className="site-description">
          Full-Stack-Developer born in Germany who loves travel, 
          <br/>code and books. Currently living in <del>Bochum</del>
          <del>NYC</del> <del>Vilnius</del> <strong>Denia</strong>.
        </h2>

        <p className="site-contact">
          You can reach me best by 
          <a href="mailto:m.fahle@gmail.com"> email </a> or 
          <a href="skype:marcelfahle?userinfo"> skype </a>, 
            my adventures in code and
          live are best documented on 
          <a href="https://instagram.com/marcelfahle" target="_blank"> Instagram </a> 
          and 
          <a href="" target="_blank"> Github</a>.   
        </p>


      </div>
    );
  }
}

export default App;
