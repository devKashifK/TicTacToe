import React, { useState } from "react";
import ResetButton from "../Reset/Reset";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import Square from "../Square/Square";
import styles from "./Board.module.css";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState("");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false)
  const [xScore ,setXScore] = useState(0)
  const [oScore ,setOScore] = useState(0)

  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleClick(i) {
    const newSquare = [...square];
    newSquare[i] = xIsPlaying ? "O" : "X";
    console.log(newSquare);
    setSquare(newSquare);
    setXIsPlaying(!xIsPlaying);
    const newWinner = checkWinner(newSquare)
    if(newWinner){
      if(newWinner === "X"){
        setXScore(xScore + 1)
      }else if(newWinner === "O"){
        setOScore(oScore + 1)
      }
      setWinner(newWinner)
      setGameOver(true)
    
    }
  }

  function reset (){
    setSquare(Array(9).fill(null))
    setWinner("")
    setGameOver (false)
    setXIsPlaying("")
  }

  function checkWinner(sq) {
    let Winner;
    for (var i = 0; i < winningCondition.length; i++) {
      const [x, y, z] = winningCondition[i];
      if (sq[x] && sq[x] === sq[y] && sq[x] === sq[z]) {
        Winner = sq[x]
        return Winner;
      }
    }  
  }


  return (
    <> <ScoreBoard xScore={xScore} oScore={oScore} />
    <div className={styles.board}>
      <div className={styles.row}>
        <Square value={square[0]} handleClick={() => handleClick(0)} />
        <Square value={square[1]} handleClick={() => handleClick(1)} />
        <Square value={square[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className={styles.row}>
        <Square value={square[3]} handleClick={() => handleClick(3)} />
        <Square value={square[4]} handleClick={() => handleClick(4)} />
        <Square value={square[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className={styles.row}>
        <Square value={square[6]} handleClick={() => handleClick(6)} />
        <Square value={square[7]} handleClick={() => handleClick(7)} />
        <Square value={square[8]} handleClick={() => handleClick(8)} />
      </div>
      <div className={gameOver ? styles.gameOverShow : styles.gameOver}>
        <p>{`Winner is : ${winner}`}</p>
        <button onClick={() => reset()} className={styles.btn}> Restart the Game </button> 
        </div>
    </div>
    <ResetButton reset={() => reset()}/>
    </>
  );
}
