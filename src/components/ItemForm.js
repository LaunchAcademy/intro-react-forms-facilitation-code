import React, { useState } from "react"

const ItemForm = (props) => {

  // const [name, setName] = useState("")
  // const [description, setDescription] = useState("")

  const [itemObject, setItemObject] = useState({
    itemName: "",
    itemDescription: ""
  })
  // console.log("item object state", itemObject)

  // const trackUserTypingIntoName = (event) => {
  //   setName(event.currentTarget.value)
  // }

  // const trackUserTypingIntoDescription = (event) => {
  //   setDescription(event.currentTarget.value)
  // }

  const trackUserTyping = (event) => {
    // console.log(event)
    // console.log(event.currentTarget)
    // console.log(event.currentTarget.name)
    // console.log(event.currentTarget.value)

    setItemObject({
      ...itemObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // const allFormData = {
    //   itemName: name,
    //   itemDescription: description
    // }


    props.addFormDataToItems(itemObject)

    resetTheFormState()
  }

  const resetTheFormState = () => {
    // setName("")
    // setDescription("")
    setItemObject({
      itemName: "",
      itemDescription: ""
    })
  }
  
  // console.log("item name state:", name)
  // console.log("item description state:", description)

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:
          <input
            type="text"
            name="itemName"
            value={itemObject.itemName}
            onChange={trackUserTyping}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="itemDescription"
            value={itemObject.itemDescription}
            onChange={trackUserTyping}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={resetTheFormState}>
        Clear Form
      </button>
    </div>
  )
}

export default ItemForm
