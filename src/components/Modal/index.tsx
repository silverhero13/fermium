import React, { ReactNode } from 'react'

import './styles.css'

interface Props {
  children: ReactNode
}

const Modal = (props: Props) => {
  return (
    <div className="modal">
      <div className="modal__content">{props.children}</div>
    </div>
  )
}

export default Modal
