import React, { Component } from 'react';

import Intro from './Intro';
//import About from './About';
//import Works from './Works';

import './assets/styles/modules/App.scss';

class App extends Component {
  render() {
    return (
      <div className="site">
        <Intro />
        {/*<About />*/}
        {/*<Works />*/}
      
      </div>
    );
  }
}

export default App;
