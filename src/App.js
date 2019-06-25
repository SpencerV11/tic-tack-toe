import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      a5: '',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      playersTurn: true,
      currentPlayer: 'X'
    }
  }

  checkWinner() {
    let { a1, a2, a3, a4, a5, a6, a7, a8, a9 } = this.state
    if ((a1 === 'X' && a2 === 'X' && a3 === 'X') || (a4 === 'X' && a5 === 'X' && a6 === 'X') || (a7 === 'X' && a8 === 'X' && a9 === 'X') ||
      (a2 === 'X' && a5 === 'X' && a8 === 'X') || (a4 === 'X' && a1 === 'X' && a7 === 'X') || (a3 === 'X' && a6 === 'X' && a9 === 'X') ||
      (a3 === 'X' && a5 === 'X' && a7 === 'X') || (a1 === 'X' && a5 === 'X' && a9 === 'X')) {
      alert('X is the winner!')
      this.setState({
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: '',
        a9: '',
        playersTurn: true,
        currentPlayer: 'X'
      })
    } else if((a1 === 'O' && a2 === 'O' && a3 === 'O') || (a4 === 'O' && a5 === 'O' && a6 === 'O') || (a7 === 'O' && a8 === 'O' && a9 === 'O') ||
    (a2 === 'O' && a5 === 'O' && a8 === 'O') || (a4 === 'O' && a1 === 'O' && a7 === 'O') || (a3 === 'O' && a6 === 'O' && a9 === 'O') ||
    (a3 === 'O' && a5 === 'O' && a7 === 'O') || (a1 === 'O' && a5 === 'O' && a9 === 'O')) {
      alert('O is the winner!')
      this.setState({
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: '',
        a9: '',
        playersTurn: true,
        currentPlayer: 'X'
      })
    } else if(a1 !== '' && a2 !== '' && a3 !== '' && a4 !== '' && a5 !== '' && a6 !== '' && a7 !== '' && a8 !== '' & a9 !== '') {
      alert('Tie')
      this.setState({
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: '',
        a9: '',
        playersTurn: true,
        currentPlayer: 'X'
      })
    }
  }

    componentDidUpdate() {
      this.checkWinner()
    }

    playersTurn(name) {
      let { playersTurn } = this.state
      if (playersTurn) {
        this.setState({
          [name]: 'X',
          playersTurn: false,
          currentPlayer: 'O'
        })
      } else if (playersTurn === false && [name] !== 'X') {
        this.setState({
          [name]: 'O',
          playersTurn: true,
          currentPlayer: 'X'
        })
      }
    }

    render() {
      return (
        <div>
          <div className='turn'>{`Go ahead player ${this.state.currentPlayer}`}</div>
          <div className='game-board'>
            <div name='a1' onClick={() => this.playersTurn('a1')} className='square a1'>{this.state.a1}</div>
            <div name='a2' onClick={() => this.playersTurn('a2')} className='square a2'>{this.state.a2}</div>
            <div name='a3' onClick={() => this.playersTurn('a3')} className='square a3'>{this.state.a3}</div>
            <div name='a4' onClick={() => this.playersTurn('a4')} className='square a4'>{this.state.a4}</div>
            <div name='a5' onClick={() => this.playersTurn('a5')} className='square a5'>{this.state.a5}</div>
            <div name='a6' onClick={() => this.playersTurn('a6')} className='square a6'>{this.state.a6}</div>
            <div name='a7' onClick={() => this.playersTurn('a7')} className='square a7'>{this.state.a7}</div>
            <div name='a8' onClick={() => this.playersTurn('a8')} className='square a8'>{this.state.a8}</div>
            <div name='a9' onClick={() => this.playersTurn('a9')} className='square a9'>{this.state.a9}</div>
          </div>
        </div>
      );
    }
  }

  export default App;
