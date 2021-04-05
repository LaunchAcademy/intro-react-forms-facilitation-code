import React, { useState } from "react"

const ItemFormContainer = (props) => {
  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")

  const [itemObject, setItemObject] = useState({
    itemName: "",
    description: ""
  })

  const handleClearForm = () => {
    // setItemName("")
    // setItemDescription("")
    setItemObject({
      itemName: "",
      description: ""
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // debugger
    props.addItem(itemObject)
    handleClearForm()
  }

  // const listenToNameChange = (event) => {
  //   // debugger
  //   // console.log(event.currentTarget.value)
  //   setItemName(event.currentTarget.value)
  // }

  // const listenToDescriptionChange = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  const onChangeHandler = (event) => {
    setItemObject({
      ...itemObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">
          Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={onChangeHandler}
            value={itemObject.itemName}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={onChangeHandler}
            value={itemObject.description}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={handleClearForm}> Clear Form Button </button>
    </div>
  )
}

export default ItemFormContainer
