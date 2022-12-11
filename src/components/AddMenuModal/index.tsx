import React, { ChangeEventHandler, FormEventHandler } from 'react'
import axios from 'axios'

import { PrimaryButton } from '../Button'
import Header from '../Header'
import Input, { Select } from '../Input'
import Modal from '../Modal'

const AddMenuModal = () => {
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [type, setType] = React.useState('')

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }

  const handleChangePrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrice(e.target.value)
  }

  const handleChangeType: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setType(e.target.value)
  }

  const addMenu = async () => {
    const data = {
      name,
      price,
      type,
    }

    await axios.post('http://localhost:3000/menu', data)
  }

  const handleAddMenu: FormEventHandler = (e) => {
    e.preventDefault()

    addMenu().finally(() => {
      window.location.reload()
    })
  }

  return (
    <Modal>
      <Header>New menu</Header>

      <form>
        <Input
          label="Name"
          type="text"
          value={name}
          onChange={handleChangeName}
        />

        <Input
          label="Price"
          type="number"
          value={price}
          onChange={handleChangePrice}
        />

        <Select
          label="Type"
          value={type}
          options={[
            { value: 'starter', display: 'Starter' },
            { value: 'main-course', display: 'Main course' },
            { value: 'dessert', display: 'Dessert' },
          ]}
          onChange={handleChangeType}
        />

        <PrimaryButton text="Add" onClick={handleAddMenu} />
      </form>
    </Modal>
  )
}

export default AddMenuModal
