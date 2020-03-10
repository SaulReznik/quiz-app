import React from 'react';

const Header = props => {
    const { questionCount } = props;
    return (
        <header>
            <span id='question-amount'>{questionCount}/10</span>
        </header>
    )
}

export default Header;
