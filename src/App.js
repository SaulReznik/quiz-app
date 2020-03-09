import React from 'react';
import './App.css';

import questions from './data.json';

import Header from "./components/Header";

import Game from './components/Game';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default class App extends React.Component{
  state = {
    questionCount: 0,                //Total question counter for determine when to end the game
    rightAnswers: 0,                 //Right answer counter for result
    question: null,                  //Single question, it will updates after clicking the option button
  };

  componentDidMount(){
    let index = getRandomArbitrary(0, questions.length-1);

    this.setState({
      question: questions[index],
    });
  }

  startButton = () => {
    this.setState({
      questionCount: 0,
      tightAnswers: 0,
    })
  }

  optionClick = () => {
    this.setState(prevState => {
      return {
        questionCount: prevState.questionCount + 1
      }
    })
  }

  render(){
    const { questionCount , question} = this.state;

    return (
      <div className="App">
        <Header 
          questionCount={questionCount}
          startButton={this.startButton}
        />
        <Game 
          optionClick={this.optionClick}
          question={question}
        />
      </div>
    );
  }
}

