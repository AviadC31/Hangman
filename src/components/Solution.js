import Letter from './Letter';
import React, { Component } from 'react';

class Solution extends Component {

    render() {
        return (
            <div>
                {this.props.solution.word.split("").map(l => <Letter key={"letter"} 
                letter={this.props.letters[l] ? l : '_'}  />)}
                <div id="hint">{this.props.solution.hint}</div>
            </div>
        )
    }
}

export default Solution


