import React from 'react';

const Screen = props => {
    const {question} = props;
    console.log(typeof question.question);
    return (
        <div id='screen-container'>
            <span>{question.question}</span>
        </div>
    )
}

export default Screen;