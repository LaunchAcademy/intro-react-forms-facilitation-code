import React, { useState } from "react"

const ItemFormContainer = (props) => {

  // listen/log what the user types as they type
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")

  console.log("Item Name:", itemName)
  console.log("Item Description:", itemDescription)

  const handleNameChange = (event) => {
    // get the value of the input field
    setItemName(event.currentTarget.value)
  }

  const handleDescriptionChange = (event) => {
    // get the value of the input field
    setItemDescription(event.currentTarget.value)
  }

  const clearForm = () => {
    setItemName("")
    setItemDescription("")
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newFormData = { 
      itemName: itemName,
      itemDescription: itemDescription
    }

    props.addItem(newFormData)
  }


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleNameChange}
            value={itemName}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={handleDescriptionChange}
            value={itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={clearForm}>
        Clear the Form
      </button>
    </div>
  )
}

export default ItemFormContainer
