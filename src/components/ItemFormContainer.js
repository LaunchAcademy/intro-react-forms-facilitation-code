import React, { useState } from "react"

const ItemFormContainer = (props) => {
  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")
  const [newItem, setNewItem] = useState({
    name: "",
    description: ""
  })

  const handleClearForm = () => {
    // event.preventDefault()
    // setItemName("")
    // setItemDescription("")

    setNewItem({ 
      name: "",
      description: ""
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // props.addItem({itemName: itemName, itemDescription: itemDescription})
    props.addItem(newItem)
    handleClearForm()
  }

  // const listenToNameChange = (event) => {
  //   setItemName(event.currentTarget.value)
  // }

  // const listenToDescriptionChange = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  const handleChange = (event) => {
    // debugger
    // console.log(event.currentTarget.value)
    setNewItem({
      ...newItem,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="name"
            onChange={handleChange}
            value={newItem.name}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="description"
            onChange={handleChange}
            value={newItem.description}
          />
        </label>

      <div className="button-group">
        <input type="submit" className="button" value="Submit Item" />
        <button className="button" type="button" onClick={handleClearForm}> Clear Form Button </button>
      </div>

      </form>
      
      {/* <button className="button" onClick={handleClearForm}> Clear Form Button </button> */}

    </div>
  )
}

export default ItemFormContainer
