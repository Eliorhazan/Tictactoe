import React, { Component } from 'react';
import Board from './Board';

class Game extends React.Component {
    Gamehandler(){
      window.location.reload(false);
      
    }
    render() {
      return (
        <div className="container">
          <div >
            <Board />
          </div>
          <br/>
            <div>
              <button onClick={this.Gamehandler} className='btn btn-warning btn-lg'>New game</button>
            </div>
        </div>
      );
    }
  }
  export default Game