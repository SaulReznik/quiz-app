import React from 'react';
import './App.css';

import questions from './data.json';

import Header from "./components/Header";
import Game from './components/Game';
import Popup from './components/Popup';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const loading = <h1>Loading</h1>;

export default class App extends React.Component{
  state = {
    lastIndexes: [],
    isLoading: true,
    questionCount: 0,                //Total question counter for determine when to end the game
    rightAnswers: 0,                 //Right answer counter for result
    question: null,                  //Single question, it will updates after clicking the option button
  };

  componentDidMount(){
    let index = getRandomArbitrary(0, questions.length-1);

    this.setState({
      question: questions[index],
      isLoading: false
    });
  }

  startButton = () => {
    this.setState({
      questionCount: 0,
      tightAnswers: 0,
    })
  }

  optionClick = (isCorrect) => {
    const {lastIndexes} = this.state;
    let index = getRandomArbitrary(0, questions.length-1);
    
    while(lastIndexes.includes(index)){
         index = getRandomArbitrary(0, questions.length-1);
    }

    this.setState(prevState => {
      return {
        question: questions[index],
        lastIndexes: [...prevState.lastIndexes, index],
        rightAnswers: prevState.rightAnswers += isCorrect,
        questionCount: prevState.questionCount + 1
      }
    })
  }

  restartGame = () => {
      let index = getRandomArbitrary(0, questions.length-1);

      this.setState({
        lastIndexes: [],
        questionCount: 0,                
        rightAnswers: 0,                 
        question: questions[index],
      })
  }

  render(){
    const { rightAnswers, isLoading, questionCount , question} = this.state;
    
    return isLoading ? loading : 
      questionCount < 10 ? (
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
      ) : (
      <Popup 
        rightAnswers={rightAnswers}
        restartGame={this.restartGame}
      />
      )
  }
}