import React, { useState } from "react"
import _ from "lodash"

const ItemFormContainer = (props) => {
  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")
  const [newItem, setNewItem] = useState({
    name: "",
    description: ""
  })

  console.log(newItem);

  const handleClearForm = () => {
    // setItemName("")
    // setItemDescription("")
    setNewItem({
      name: "",
      description: ""
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // const newItem = { name: itemName, description: itemDescription }
    // debugger
    props.addItem(newItem)
    // props.addItem({ name: itemName, description: itemDescription })
    handleClearForm()
  }

  // const listenToNameChange = (event) => {
  //   // debugger
  //   setItemName(event.currentTarget.value)
  // }

  // const listenToDescriptionChange = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  const handleFieldChange = (event) => {
    const updatedItem = {
      ...newItem, 
      [event.currentTarget.name]: event.currentTarget.value
    }
    // debugger
    setNewItem(updatedItem)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">
          Name:
          <input
            type="text"
            id="itemName"
            name="name"
            onChange={handleFieldChange}
            value={newItem.name}
          />
        </label>

        <label htmlFor="itemDescription">
          Description:
          <input
            type="text"
            id="itemDescription"
            name="description"
            onChange={handleFieldChange}
            value={newItem.description}
          />
        </label>

        <input className="button" type="submit" value="Submit Item" />
      </form>

      <button className="button" onClick={handleClearForm}> Clear Form Button </button>
    </div>
  )
}

export default ItemFormContainer
