import React from 'react';
import './App.css';
import Header from "./components/Header";

import Game from './components/Game';
export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

