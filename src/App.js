import React, { Component } from 'react';
import router from './router'
import Header from './component/header/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
               
        <Header/>
        {router}
        
      </div>
    );
  }
}

export default App;
