import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {

    render() {
        return (
            <div>
            <div>Available Letters</div>
            {Object.keys(this.props.letters).map(l => <Letter key={'letter'} class={this.props.letters[l] ? 'deletedLetter':'Letter'} letter={l} 
             selectLetter={this.props.selectLetter}/>)}
            </div>
         )
    }
}

export default Letters
