import React, { Component } from 'react';
import './App.css';
import Main from './component/main/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
<div>
        <Main></Main>

      </div>
        </BrowserRouter>
    );
  }
}

export default App;
