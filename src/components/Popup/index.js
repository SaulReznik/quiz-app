import React from 'react';

export default function Popup(props){
    const { rightAnswers, restartGame } = props;

    return (
        <div className="popup-container">
            <div className="popup flexy-stuff">
                <h1>{rightAnswers}/10</h1>
                <button onClick={restartGame}>Restart Game</button>
            </div>
        </div>
    );  
}