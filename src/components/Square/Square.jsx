import React from 'react'
import styles from "./Square.module.css"

export default function Square(props) {
  return (
    <div className={props.value === "X" ? styles.squareRed : styles.square} onClick={props.value === null ? props.handleClick : null}>
      {props.value}
    </div>
  )
}
