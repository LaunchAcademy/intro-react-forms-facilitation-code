import React, { useState } from "react"

const ItemFormContainer = (props) => {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")

  const handleClearForm = (event) => {
    event.preventDefault()
    setItemName("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    props.addItem({itemName: itemName, itemDescription: itemDescription})
  }

  const listenToNameChange = (event) => {
    setItemName(event.currentTarget.value)
  }

  const listenToDescriptionChange = (event) => {
    setItemDescription(event.currentTarget.value)
  }


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={listenToNameChange}
            value={itemName}
          />
        </label>

        <label htmlFor="name">Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={listenToDescriptionChange}
            value={itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={handleClearForm}> Clear Form Button </button>

      <p>{itemName}</p>
      <p>{itemDescription}</p>
    </div>
  )
}

export default ItemFormContainer
