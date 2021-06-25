import React, { useState } from "react"

const ItemFormContainer = (props) => {

  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemFields, setItemFields] = useState({
    itemName: "",
    itemDescription: ""
  })

  const changeNameField = (event) => {
    setItemName(event.currentTarget.value)
  }

  const changeDescriptionField = (event) => {
    setItemDescription(event.currentTarget.value)
  }

  const clearForm = () => {
    setItemName("")
    setItemDescription("")
  }

  const handleSubmissionItem = (event) => {
    event.preventDefault()

    let fieldState = { 
      itemName: itemName,
      itemDescription: itemDescription
    }

    props.addItem(fieldState)
    // pass what is in itemName and itemDescription up to App.js
  }

  console.log(itemName)

  return (
    <div>
      <form onSubmit={handleSubmissionItem}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={changeNameField}
            value={itemName}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={changeDescriptionField}
            value={itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={clearForm}> CLEAR THE FORM</button>
    </div>
  )
}

export default ItemFormContainer
