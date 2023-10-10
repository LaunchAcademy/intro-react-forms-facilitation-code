import React, { useState } from "react"
import _ from "lodash"

const ItemForm = (props) => {

  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDescription: ""
  })
  console.log(newItem);

  // const trackUserTypingIntoItemName = (event) => {
  //   // debugger
  //   // setItemName(event.currentTarget.value)
  // }

  // const trackUserTypingIntoItemDescription = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  const handleInputChange = (event) => {
    // debugger
    console.log(event.currentTarget);
    setNewItem({
      ...newItem,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    debugger
    // const allFormData = {
    //   itemName: itemName,
    //   itemDescription: itemDescription
    // }


    props.addFormDataToItems(newItem)

    resetTheFormState()
  }

  const resetTheFormState = () => {
    // setItemName("")
    // setItemDescription("")
    setNewItem({
      itemName: "",
      itemDescription: ""
    })
  }
  
  // console.log("item name state:", itemName)
  // console.log("item description state:", itemDescription)
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={newItem.itemName}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="itemDescription">
          Description:
          <input
            type="text"
            name="itemDescription"
            value={newItem.itemDescription}
            onChange={handleInputChange}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={resetTheFormState}>
        Clear Form
      </button>
    </div>
  )
}

export default ItemForm
