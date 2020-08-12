import React, { Component } from 'react';

class EndGame extends Component {
    render() {
        return (
        <div >{this.props.score <= 0?  'LOSER! the solution is '+this.props.word :
                                     this.props.count == this.props.word.length ? 'you win': ''}</div>
         )
    }
}

export default EndGame
