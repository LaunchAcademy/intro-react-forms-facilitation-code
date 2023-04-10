import React, { useState } from "react"

const ItemFormContainer = (props) => {

  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")

  const listenToItemName = (eventObject) => {
    setItemName(eventObject.currentTarget.value)
  }

  const listenToItemDescription = (event) => {
    setItemDescription(event.currentTarget.value)
  }

  const clearForm = () => {
    setItemName("")
    setItemDescription("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newItem = {
      itemName: itemName,
      itemDescription: itemDescription
    }

    props.addItem(newItem)   
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={listenToItemName}
            value={itemName}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={listenToItemDescription}
            value={itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={clearForm}>
        Clear Form
      </button>
    </div>
  )
}

export default ItemFormContainer
