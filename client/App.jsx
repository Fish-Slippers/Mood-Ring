import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  render() {
    return (
      <MainContainer />
    )
  }
}

export default App;