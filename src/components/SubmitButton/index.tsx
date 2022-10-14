import React from 'react'
import './styles.css'

interface Props {
  value: string
}

const Field = (props: Props) => {
  return (<input className='submit-button' type={"submit"} value={props.value} />)
}

export default Field
