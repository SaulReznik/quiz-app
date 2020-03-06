import React from 'react';
import './App.css';

import questions from './data';

import Header from "./components/Header";

import Game from './components/Game';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min;
}

export default class App extends React.Component{
  state = {
    question: null,
  };

  componentDidMount(){
    console.log(questions);
    let index = getRandomArbitrary(0, questions.length-1);

    this.setState({
      question: questions[index],
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

