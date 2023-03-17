import React from 'react'
import styles from "./Reset.module.css"

export default function ResetButton(props) {
  return (
    <div>
  <button className={styles.btn} onClick={props.reset}>Reset Game</button>
    </div>
  )
}
