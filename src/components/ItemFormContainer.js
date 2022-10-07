import React, { useState } from "react"

const ItemFormContainer = (props) => {

  // const [name, setName] = useState("")
  // const [description, setDescription] = useState("")
  const [formFieldValues, setFormFieldValues] = useState({
    itemName: "",
    itemDescription: ""
  })


  const handleInputChange = (event) => {

    setFormFieldValues({
      ...formFieldValues,
      [event.currentTarget.name]: event.currentTarget.value, 
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.addItem(formFieldValues)
  }

  const handleClearForm = () => {
    setFormFieldValues({
      itemName: "",
      itemDescription: ""
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleInputChange}
            value={formFieldValues.itemName}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={handleInputChange}
            value={formFieldValues.itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={handleClearForm}>
        Clear Form
      </button>
    </div>
  )
}

export default ItemFormContainer
