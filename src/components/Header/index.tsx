import React, { ReactNode } from 'react'

import './styles.css'

interface Props {
  children: ReactNode
}

const Header = (props: Props) => {
  return <h1 className="header">{props.children}</h1>
}

export default Header
