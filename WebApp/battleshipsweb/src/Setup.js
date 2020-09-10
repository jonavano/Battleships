import React from 'react';
import logo from './logo.svg';
import './Setup.css';

class Setup extends React.Component {
  render() {
    return (
        <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
 }
}

class Board  extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    renderRow(j, k) {
        var result = [];
        var i;
        for(i = 0; i < j; i++) {
            result.push(this.renderSquare(i + k));
        }
        return result;
    }

    renderBoard(j) {
        var i;
        var result = [];
        for(i = 0; i < j; i++) {
            result.push(<div classname="board-row"> {this.renderRow(j,i * j)} </div>);
        }
        return result;
    }

    render() {
        return(
            <div>
                {this.renderBoard(7)}
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return(
            <button
                className="square"
                onClick={() => this.props.onClick()}>
                {this.props.value}      
            </button>
        );
    }
}

export default Setup;