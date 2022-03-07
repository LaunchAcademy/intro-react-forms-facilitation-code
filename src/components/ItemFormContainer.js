import React, { useState } from "react"
import _ from "lodash"

const ItemFormContainer = (props) => {
  // debugger
  const [itemObject, setItemObject] = useState({ name: "", description: "" })
  const [errors, setErrors] = useState({})

  const handleClearForm = (event) => {
    // event.preventDefault()
    setItemObject({ name: "", description: "" })
  }

  const handleFormSubmit = (event) => {
    // debugger
    event.preventDefault()
    props.addItem(itemObject)
    handleClearForm()
  }

  const handleFormChange = (event) => {
    // debugger
    setItemObject({
      ...itemObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleFormChange}
            value={itemObject.name}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleFormChange}
            value={itemObject.description}
          />
        </label>

        <input type="submit" value="Submit Item" />
        <button type="button" onClick={handleClearForm}>
          {" "}
          Clear Form Button{" "}
        </button>
      </form>
    </div>
  )
}

export default ItemFormContainer
