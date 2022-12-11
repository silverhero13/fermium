import React, { ChangeEventHandler, FormEventHandler } from 'react'
import axios from 'axios'

import { PrimaryButton } from '../Button'
import Header from '../Header'
import Input, { Select } from '../Input'
import Modal from '../Modal'
import { Menu } from '../../types'

interface Props {
  menuToUpdate: Menu
}

const UpdateMenuModal = (props: Props) => {
  const [id] = React.useState(props.menuToUpdate.id)
  const [name, setName] = React.useState(props.menuToUpdate.name)
  const [price, setPrice] = React.useState(props.menuToUpdate.price.toString())
  const [type, setType] = React.useState<string>(props.menuToUpdate.type)

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }

  const handleChangePrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrice(e.target.value)
  }

  const handleChangeType: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setType(e.target.value)
  }

  const updateMenu = async () => {
    await axios.patch(`http://localhost:3000/menu/${id}`, {
      name,
      price,
      type,
    })
  }

  const handleSaveMenu: FormEventHandler = (e) => {
    e.preventDefault()

    updateMenu().finally(() => {
      window.location.reload()
    })
  }

  return (
    <Modal>
      <Header>Update menu</Header>

      <form>
        <Input label="ID" type="text" value={id} disabled />

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

        <PrimaryButton text="Save" onClick={handleSaveMenu} />
      </form>
    </Modal>
  )
}

export default UpdateMenuModal
