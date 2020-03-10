import React from 'react';

function Header(props) {
    const { questionCount } = props;
    return (
        <header>
            <span id='question-amount'>{questionCount}/10</span>
        </header>
    )
}

export default Header;
