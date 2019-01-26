import React, { Component } from 'react';
import './App.css';
import Button from './Button';

const cross = '✖︎';
const circle = '◯';

class App extends Component {
  state = {
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']],
    player: cross,
    message: null
  }
  changeState = (rowNo, colNo) => {
    this.state.player === cross ? this.setState({ player: circle }) : this.setState({ player: cross });
    const newBoard = this.state.board.map((row, rowIndex) => {
      return rowIndex === rowNo ? row.map((col, colIndex) => {
        return colIndex === colNo ? col = this.state.player : col
      }) : row
    })
    this.setState({
      board: newBoard
    })
  }

  judge = () => {
    const value = this.state.board;
    if (
      (value[0][0] === value[0][1] && value[0][1] === value[0][2] && value[0][0] !== '' && value[0][1] !== '' && value[0][2] !== '') ||
      (value[1][0] === value[1][1] && value[1][1] === value[1][2] && value[1][0] !== '' && value[1][1] !== '' && value[1][2] !== '') ||
      (value[2][0] === value[2][1] && value[2][1] === value[2][2] && value[2][0] !== '' && value[2][1] !== '' && value[2][2] !== '') ||
      (value[0][0] === value[1][1] && value[1][1] === value[2][2] && value[0][0] !== '' && value[1][1] !== '' && value[2][2] !== '') ||
      (value[0][2] === value[1][1] && value[1][1] === value[2][0] && value[0][2] !== '' && value[1][1] !== '' && value[2][0] !== '')
    ) {
      this.setState({ message: 'WINNER : ' + (this.state.player === cross ? circle : cross) })
    }
  }

  componentDidUpdate(presvProps, prevState) {
    if (this.state.board !== prevState.board) {
      this.judge();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.message}</div>
          <table>
            <tbody>
              {this.state.board.map((row, rowIndex) => {
                return <tr key={rowIndex}>
                  {row.map((col, colIndex) => {
                    return <td key={colIndex}>
                      <Button
                        text={this.state.board[rowIndex][colIndex]}
                        rowNo={rowIndex}
                        colNo={colIndex}
                        changeState={this.changeState}
                        message={this.state.message}
                      /></td>
                  })}
                </tr>
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
