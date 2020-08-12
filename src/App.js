import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      lettersStatus: this.generateLetterStatuses(),
      solution: this.random(),
      score: 100,
    }
  }

  countDuplicates=(str)=>{
    let check={}
    let counter=0
    for(let x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x)
        check[l] = (isNaN(check[l]) ? 1 : check[l] +1)
    }
    for (let key in check)
     if(check[key]>1){
      counter+=check[key]-1
     } 
    return counter 
  }

  random = () => {
    let data = [
      { word: 'SMELLYCAT', hint: 'what are they fiding you' },
      { word: 'GANTZ', hint: 'An Israeli Politician' },
      { word: 'BURGERRANCH', hint: 'An Israeli Burgers store' },
      { word: 'BOWLING', hint: 'Enjoing Sportive throwing ball activity' },
      { word: 'SUNGLASSES', hint: 'Coolish Summer Item' },
    ]
    let random = Math.floor(Math.random() * 5)
    data[random]['count'] = this.countDuplicates(data[random].word)
    return data[random]
  }

  selectLetter = (letter) => {
    const state = { ...this.state }
    state.lettersStatus[letter] = true
    this.setState(state)
    if (state.solution.word.includes(letter)) {
      state.score = this.state.score + 5
      state.solution.count++
    } else state.score = this.state.score - 20
      this.setState(state)

  }

  generateLetterStatuses = () => {
    let letters = {}
    for (let i = 65; i <= 90; i++) {
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }

  render() {
    return (
      <div className="app">
        <div id="Score">
          <Score key={"score"} score={this.state.score} />
        </div>
        <div id="Solution">
          <Solution key={"solution"} letters={this.state.lettersStatus} solution={this.state.solution} />
        </div>
        <div id="Letters">
          <Letters key={"letters"} letters={this.state.lettersStatus} selectLetter={this.selectLetter} />
        </div>
        <div id="Letters">
          <EndGame key={"EndGame"} score={this.state.score} count={this.state.solution.count} word={this.state.solution.word} />
        </div>
      </div>
    )
  }
}

export default App;
