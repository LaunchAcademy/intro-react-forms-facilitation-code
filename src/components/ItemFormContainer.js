import React, { useState } from "react"
import _ from "lodash"

const ItemFormContainer = (props) => {
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")

  const handleClearForm = () => {
    setItemName("")
    setItemDescription("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    props.addItem({ name: itemName, description: itemDescription })
    handleClearForm()
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

      <button onClick={handleClearForm}> Clear Form Button </button>
    </div>
  )
}

export default ItemFormContainer
