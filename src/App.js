import React from 'react';
import './App.css';

import questions from './data';

import Header from "./components/Header";

import Game from './components/Game';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default class App extends React.Component{
  state = {
    questionCount: 0,
    question: null,
  };

  componentDidMount(){
    console.log(questions);
    let index = getRandomArbitrary(0, questions.length-1);

    this.setState({
      question: questions[index],
    });
  }

  optionClick = () => {
    this.setState(prevState => {
      return {
        questionCount: prevState.questionCount + 1
      }
    })
  }

  render(){
    const { questionCount } = this.state;

    return (
      <div className="App">
        <Header questionCount={questionCount}/>
        <Game optionClick={this.optionClick}/>
      </div>
    );
  }
}

