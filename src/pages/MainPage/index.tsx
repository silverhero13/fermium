import React from 'react'
import axios from 'axios'

import AddMenuModal from '../../components/AddMenuModal'
import Button from '../../components/Button'
import ButtonGroup from '../../components/ButtonGroup'
import { Menu } from '../../types'
import UpdateMenuModal from '../../components/UpdateMenuModal'

import './styles.css'

function App() {
  const [menuList, setMenuList] = React.useState<Menu[]>([])

  const [menuToUpdate, setMenuToUpdate] = React.useState<Menu>()
  const [showAddMenuModal, setShowAddMenuModal] = React.useState(false)

  const getMenu = async () => {
    const { data } = await axios.get<Menu[]>('http://localhost:1234/menu')

    setMenuList(data)
  }

  const deleteMenu = async (id: number) => {
    await axios.delete(`http://localhost:1234/menu/${id}`)
  }

  const handleUpdateMenu = (menu: Menu) => () => {
    setMenuToUpdate(menu)
  }

  const handleDeleteMenu = (id: number) => () => {
    deleteMenu(id).finally(() => {
      window.location.reload()
    })
  }

  /* Fetch all of the menu when the page loads */
  React.useEffect(() => {
    getMenu()
  }, [])

  const handleAddMenu = () => {
    setShowAddMenuModal(true)
  }

  return (
    <div className="main-page">
      <table className="menu-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuList.map((menuItem) => (
            <tr key={menuItem.id}>
              <td>{menuItem.name}</td>
              <td>{menuItem.type}</td>
              <td>{menuItem.price}</td>
              <td>
                <ButtonGroup>
                  <Button text="Update" onClick={handleUpdateMenu(menuItem)} />
                  <Button
                    text="Delete"
                    onClick={handleDeleteMenu(menuItem.id)}
                  />
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <ButtonGroup>
        <Button text="Add menu" onClick={handleAddMenu} />
      </ButtonGroup>

      {/* Show the AddMenuModal after clicking the button above */}
      {showAddMenuModal && <AddMenuModal />}

      {/* Show the UpdateMenuModal if there is a menu to be updated */}
      {menuToUpdate && <UpdateMenuModal menuToUpdate={menuToUpdate} />}
    </div>
  )
}

export default App
