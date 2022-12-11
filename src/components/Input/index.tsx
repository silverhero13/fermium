import React, { ChangeEventHandler } from 'react'

import './styles.css'

interface InputProps {
  label: string
  type: 'text' | 'number'
  value: string | number
  onChange?: ChangeEventHandler
  disabled?: boolean
}

interface SelectOption {
  value: string
  display: string
}

interface SelectProps {
  label: string
  value: string
  options: SelectOption[]
  onChange: ChangeEventHandler
}

const Input = (props: InputProps) => {
  return (
    <>
      <label className="label">{props.label}</label>
      <input
        className="input"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        required
      />
    </>
  )
}

export const Select = (props: SelectProps) => {
  return (
    <>
      <label className="label">{props.label}</label>
      <select
        className="input"
        value={props.value}
        onChange={props.onChange}
        required
      >
        {props.options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.display}
          </option>
        ))}
      </select>
    </>
  )
}

export default Input
