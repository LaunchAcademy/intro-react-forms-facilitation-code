import React, { useState } from "react"

const ItemFormContainer = (props) => {
  // debugger
  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")

  const [item, setItem] = useState({
    name: "",
    description: ""
  })

  console.log(item);


  const listenToChange = (event) => {
    // debugger
    // setItemName(event.currentTarget.value)

    setItem({...item, [event.currentTarget.name]: event.currentTarget.value})
  }

  // const listenToDescriptionChange = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  const clearForm = () => {
    // setItemName("")
    // setItemDescription("")
    setItem({
      name: "",
      description: ""
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log("submitting form");
    const newItem = {name: item.name, description: item.description}

    props.addItem(newItem)
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">
          Name:
          <input
            type="text"
            id="itemName"
            name="name"
            onChange={listenToChange}
            value={item.name}
          />
        </label>

        <label htmlFor="itemDescription">
          Description:
          <input
            type="text"
            id="itemDescription"
            name="description"
            onChange={listenToChange}
            value={item.description}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={clearForm}> Clear Form Button </button>
    </div>
  )
}

export default ItemFormContainer
