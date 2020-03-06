import React from 'react';

import Screen from '../Screen';
import Option from "../Option";

const Game = props => {
    return (
        <div>
           <Screen />

           <div id='options-container'>
                <Option />
                <Option />
                <Option />
                <Option />
           </div>
        </div>
    );
}

export default Game;