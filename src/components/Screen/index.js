import React from 'react';

const Screen = props => {
    const {question} = props;
    
    return (
        <div id='screen-container'>
            <span>{question.question}</span>
        </div>
    )
}

export default Screen;