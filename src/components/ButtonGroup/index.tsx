import React, { ReactNode } from 'react'

import './styles.css'

interface Props {
  children: ReactNode
}

const ButtonGroup = (props: Props) => {
  return <div className="button-group">{props.children}</div>
}

export default ButtonGroup
