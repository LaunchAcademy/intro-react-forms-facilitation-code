import React, { useState } from "react"

const ItemFormContainer = (props) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleNameChange = (event) => {
    console.log(event.currentTarget.value);
    setName(event.currentTarget.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    debugger
    const formItem = {
      itemName: name,
      description: description
    }
    props.addItem(formItem)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <input type="submit" />
    </form>
  )
}

export default ItemFormContainer
