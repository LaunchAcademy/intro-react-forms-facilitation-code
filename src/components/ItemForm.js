import React, { useState } from "react"
import _ from "lodash"

const ItemForm = (props) => {

  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")

  const trackUserTypingIntoItemName = (event) => {
    setItemName(event.currentTarget.value)
  }

  const trackUserTypingIntoItemDescription = (event) => {
    setItemDescription(event.currentTarget.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const allFormData = {
      itemName: itemName,
      itemDescription: itemDescription
    }

    props.addFormDataToItems(allFormData)

    resetTheFormState()
  }

  const resetTheFormState = () => {
    setItemName("")
    setItemDescription("")
  }
  
  console.log("item name state:", itemName)
  console.log("item description state:", itemDescription)

  return (
    <div>
         <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={trackUserTypingIntoItemName}
          />
        </label>

        <label htmlFor="itemDescription">
          Description:
          <input
            type="text"
            name="itemDescription"
            value={itemDescription}
            onChange={trackUserTypingIntoItemDescription}
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
