import React, { useState } from "react"

const ItemFormContainer = (props) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleNameChange = (event) => {
    // set the name input value into state
    // debugger
    setName(event.currentTarget.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      itemName: name,
      itemDescription: description
    }
    // debugger
    props.addItem(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleNameChange}
            value={name}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>
    </div>
  )
}

export default ItemFormContainer
