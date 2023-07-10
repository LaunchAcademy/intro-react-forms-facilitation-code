import React, { useState } from "react"

const ItemFormContainer = (props) => {

  // listen/log what the user types as they type
  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDescription: "",
  })
  console.log(newItem);

  // console.log("Item Name:", itemName)
  // console.log("Item Description:", itemDescription)

  // const handleNameChange = (event) => {
  //   // get the value of the input field
  //   // console.log(event.currentTarget);
  //   // debugger
  //   setItemName(event.currentTarget.value)
  // }

  // const handleDescriptionChange = (event) => {
  //   // get the value of the input field
  //   setItemDescription(event.currentTarget.value)
  // }

  const handleChange = (event) => {
    console.log(event.currentTarget);
    // debugger
    setNewItem({
      ...newItem, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    console.log("clearing the form!");
    // setItemName("")
    // setItemDescription("")
    setNewItem({
      itemName: "",
      itemDescription: "",
    })
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    // const newFormData = { 
    //   itemName: itemName,
    //   itemDescription: itemDescription
    // }

    props.addItem(newItem)
    clearForm()
  }


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleChange}
            value={newItem.itemName}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={handleChange}
            value={newItem.itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>
      <button onClick={clearForm} type="button">
        Clear the Form
      </button>

    </div>
  )
}

export default ItemFormContainer
