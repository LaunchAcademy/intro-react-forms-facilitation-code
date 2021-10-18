import React, { useState } from "react"

const ItemFormContainer = (props) => {
  // const [itemName, setItemName] = useState("")
  // const [description, setdescription] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })
  const handleClearForm = () => {
    setFormData({
      name: "",
      description: ""
    })
    // setItemName("")
    // setdescription("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // props.addItem({itemName: itemName, description: description})
    props.addItem(formData)
    handleClearForm()
  }

  // const listenToNameChange = (event) => {
  //   setItemName(event.currentTarget.value)
  // }

  // const listenToDescriptionChange = (event) => {
  //   setdescription(event.currentTarget.value)
  // }

  const handleChange = (event) => {
    setFormData({...formData, [event.currentTarget.name]: event.currentTarget.value})
  }

  return (
    <div className="callout secondary">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:
          <input
          // required
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>

        <label htmlFor="description">Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={handleClearForm}> Clear Form Button </button>
    </div>
  )
}

export default ItemFormContainer
