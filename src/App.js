
import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';
const initialState = ["","","","","","","","",""];

function App() {

  const [gameState, setGameState] = useState(initialState);
  const [turn, setTurn] = useState(false);

  const onSquareClick = (index) => {
    let strings = Array.from(gameState);
    strings[index] = turn ? "X" : "0";
    setGameState(strings);
    setTurn(!turn);
  }

  useEffect(() => {

    const winner = checkWinner();
    if(winner){
      alert(`Tadaaaaa.....!! ${winner} has won the Game!`);
      setGameState(initialState);
    }
  }, [gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }



  return (
    <div className="app-header">
      <h1 className='game-name'>Tic-Tac-Toe</h1>
      <div className='row jc-center'>
        <Square gameState={gameState[0]} onClick={() => onSquareClick(0)} />
        <Square gameState={gameState[1]} onClick={() => onSquareClick(1)} />
        <Square gameState={gameState[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className='row jc-center'>
        <Square gameState={gameState[3]} onClick={() => onSquareClick(3)} />
        <Square gameState={gameState[4]} onClick={() => onSquareClick(4)} />
        <Square gameState={gameState[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className='row jc-center'>
        <Square gameState={gameState[6]} onClick={() => onSquareClick(6)} />
        <Square gameState={gameState[7]} onClick={() => onSquareClick(7)} />
        <Square gameState={gameState[8]} onClick={() => onSquareClick(8)} />
      </div>
      <br/>
      <button className='clear-button' onClick={() => setGameState(initialState)}>Clear Game</button>
    </div>
  );
}

export default App;
