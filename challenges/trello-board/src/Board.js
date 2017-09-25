import React from 'react';
import Tiles from './Data';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: []
    }
  }

  componentDidMount() {
    this.setState({ tiles: Tiles })
  }

  handleClick() {
    console.log(this.state)
  }

  moveUp(idx) {
    const prevState = this.state.tiles;
    const newState = prevState.slice(0, idx - 1)
      .concat([prevState[idx]])
      .concat([prevState[idx - 1]])
      .concat(prevState.slice(idx + 1))
    this.setState({ tiles: newState })
  }

  moveDown(idx) {
    const prevState = this.state.tiles;
    const newState = prevState.slice(0, idx)
    .concat([prevState[idx + 1]])
    .concat([prevState[idx]])
    .concat(prevState.slice(idx + 2))
    this.setState({ tiles: newState })
  }
  
  render() {
    const { tiles } = this.state;

    const allTiles = tiles.map((tile, idx) => (
      <div style={{ display: 'flex' }} key={idx}>
        <button onClick={() => this.moveUp(idx)}>UP</button>
          <p>
            { tile.content }
          </p>
          <button onClick={() => this.moveDown(idx)}>DOWN</button>
      </div>
    ))

    return(
      <div>
        <p>Board Class</p>
        <button onClick={() => this.handleClick()}>Whats the state?</button>
        { allTiles }
      </div>
    )
  }
}

export default Board;