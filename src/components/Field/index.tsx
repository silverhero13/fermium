import React from 'react'
import './styles.css'

interface Props {
  type: 'text' | 'password'
  label: string
  required: boolean
}

const Field = (props: Props) => {
  return (
    <div className="field">
      <label className="field__label">{props.label}</label>
      <input
        className="field__input"
        type={props.type}
        required={props.required}
      />
    </div>
  )
}

export default Field
