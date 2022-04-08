import React, { useState } from "react"

const ItemFormContainer = (props) => {
  // debugger
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")

  const listenToNameChange = (event) => {
    setItemName(event.currentTarget.value)
  }

  const listenToDescriptionChange = (event) => {
    setItemDescription(event.currentTarget.value)
  }

  const clearForm = () => {
    setItemName("")
    setItemDescription("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.addItem({name: itemName, description: itemDescription})
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">
          Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={listenToNameChange}
            value={itemName}
          />
        </label>

        <label htmlFor="itemDescription">
          Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={listenToDescriptionChange}
            value={itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={clearForm}> Clear Form Button </button>
    </div>
  )
}

export default ItemFormContainer
