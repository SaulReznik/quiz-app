import React from 'react';
import './App.css';

import questions from './data.json';

import Game from './components/Game';
import Popup from './components/Popup';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const loading = <h1>Loading</h1>;

export default class App extends React.Component{
  state = {
    lastIndexes: [getRandomArbitrary(0, questions.length-1)],      //Indexes of already asked questions
    isLoading: true,                                               //The Loading flag
    questionCount: 0,                                              //Total question counter for determine when to end the game
    rightAnswers: 0,                                               //Right answer counter for result
    question: null,                                                //Single question, it will updates after clicking the option button
  };

  //-------------------Lifecycles--------------------//

  //Initialaising the state
  componentDidMount(){
    let index = getRandomArbitrary(0, questions.length-1);

    this.setState({
      question: questions[index],
      isLoading: false
    });
  }

  //--------------------Handlers---------------------//

  optionClick = (isCorrect) => {
    const {lastIndexes} = this.state;
    let index = getRandomArbitrary(0, questions.length-1);
    
    //Finding a question that was never asked before
    while(lastIndexes.includes(index)){
         index = getRandomArbitrary(0, questions.length-1);
    }

    this.setState(prevState => {
      return {
        question: questions[index],
        lastIndexes: [...prevState.lastIndexes, index],     //Filling the asked question
        rightAnswers: prevState.rightAnswers += isCorrect,  //If the answer was correct it will increase the right answers amount by one
        questionCount: prevState.questionCount + 1          //Just counting the asked questions amount
      }
    })
  }

  restartGame = () => {
      let index = getRandomArbitrary(0, questions.length-1);

      this.setState({
        lastIndexes: [getRandomArbitrary(0, questions.length-1)],
        questionCount: 0,                
        rightAnswers: 0,                 
        question: questions[index],
      })
  }

  render(){
    const { rightAnswers, isLoading, questionCount , question} = this.state;
    
    //If theres no data show the Loading stuff
    //If we have the data show the quiz
    //And if the amount of asked questions is reached the 10 the show the popup
    return isLoading ? loading : questionCount < 10 ? (
      <div className="App">
        <header>
          <span id='question-amount'>{questionCount}/10</span>
        </header>
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