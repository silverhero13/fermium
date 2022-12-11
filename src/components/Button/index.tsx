import React, { MouseEventHandler } from 'react'

import './styles.css'

interface Props {
  text: string
  onClick: MouseEventHandler
}

const Button = (props: Props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export const PrimaryButton = (props: Props) => {
  return (
    <button
      className="button button--primary button--full-width"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
