import React, { useState } from "react"

const ItemFormContainer = (props) => {
  const [itemName, setItemName] = useState("")

  const handleNameChange = (event) => {
    setItemName(event.currentTarget.value)
  }

  const handleClearForm = (event) => {
    event.preventDefault()
    setItemName("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    props.addItem(itemName)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleNameChange}
            value={itemName}
          />
      </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={handleClearForm}> Clear the Form </button>
    </div>
  )
}

export default ItemFormContainer
