import React, { Component } from 'react';
import Clock from './Components/layout/Clock';

class App extends Component {
  render() {
    return (
      <div>
        <Clock now="123"/>
      </div>
    );
  }
}

export default App;