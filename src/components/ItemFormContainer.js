import React, { useState } from "react"

const ItemFormContainer = (props) => {

  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDescription: ""
  })

  // const listenToItemName = (eventObject) => {
  //   setItemName(eventObject.currentTarget.value)
  // }
  // const listenToItemDescription = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }
// debugger
  const listenToInputChange = (event) => {
    // which input field did the user interact with?
    // what did the user type?
    const newStateObject = {
      ...newItem,
      [event.currentTarget.name]: event.currentTarget.value
    }
    // debugger
    setNewItem(newStateObject)
  }

  const clearForm = () => {
    setItemName("")
    setItemDescription("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // const newItem = {
    //   itemName: itemName,
    //   itemDescription: itemDescription
    // }

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
            onChange={listenToInputChange}
            value={newItem.itemName}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={listenToInputChange}
            value={newItem.itemDescription}
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
