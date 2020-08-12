import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div id={this.props.score <=50 ? 'lowScore' : this.props.score <= 80 ?
                                               'midScore': 'highScore' }>{this.props.score}</div>
         )
    }
}

export default Score
