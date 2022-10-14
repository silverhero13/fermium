import React from 'react'
import Field from '../../components/Field'
import FieldGroup from '../../components/FieldGroup'
import SubmitButton from '../../components/SubmitButton'
import logo from '../../logo.svg'
import './styles.css'

function App() {
  return (
    <div className="main-page">
      <form className="form">
        <FieldGroup>
          <Field type={'text'} label={'First name*'} required={true} />
          <Field type={'text'} label={'Middle name'} required={false} />
          <Field type={'text'} label={'Last name*'} required={true} />
          <Field type={'password'} label={'Password*'} required={true} />
          <SubmitButton value={'Sign up'} />
        </FieldGroup>
      </form>
    </div>
  )
}

export default App
