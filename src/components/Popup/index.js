import React from 'react';



const Popup = props => {
    const { rightAnswers, restartGame } = props;

    const response = (num) => {
        if(num <= 2) return 'You need to be more curious';
        if(num <= 4) return 'You could do better';
        if(num <= 6) return 'Looks like you know something about this world';
        if(num <= 8) return 'Oh, you are an interesting person to talk to';
        return 'Mr. Hawking? Is that you?';
    }

    return (
        <div className="popup-container">
            <div className="popup flexy-stuff">
                <span>{response(rightAnswers)}</span>
                <h1>{rightAnswers}/10</h1>
                <button id='restart-btn' onClick={restartGame}>Restart Game</button>
            </div>
        </div>
    );  
}

export default Popup;