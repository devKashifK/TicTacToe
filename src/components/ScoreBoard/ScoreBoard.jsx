import React from 'react'
import styles from "./Score.module.css"

export default function ScoreBoard(props) {
  return (
    <div className={styles.ScoreBoard}>
      <div className={styles.scoreX}> X - <span className={styles.Score}>{props.xScore} </span></div>
      <div className={styles.scoreO}> O - <span className={styles.Score}>{props.oScore} </span></div>
    </div>
  )
}
