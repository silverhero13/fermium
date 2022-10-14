import React, { PropsWithChildren } from 'react'
import './styles.css'

interface Props {
  label: string
}

const FieldGroup = (props: PropsWithChildren) => {
  return (
    <div className='field-group'>
        {props.children}
    </div>)
}

export default FieldGroup
