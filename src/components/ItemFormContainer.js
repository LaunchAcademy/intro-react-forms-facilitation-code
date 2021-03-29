import React, { useState } from "react"

const ItemFormContainer = (props) => {
  const [itemName, setItemName] = useState("i have hijacked the name field")
  const [itemDescription, setItemDescription] = useState("ooooohhh look at me")

  const formSubmitCallback = (event) => {
    event.preventDefault()

    const itemFields = {  
      itemName: itemName, 
      itemDescription: itemDescription
    }

    props.addItem(itemFields)

    setItemName("")
    setItemDescription("")
  }

  const handleNameChange = (event) => {
    setItemName(event.currentTarget.value)
  }
  
  const handleDescriptionChange = (event) => {
    setItemDescription(event.currentTarget.value)
  }

  return (
    <div>
      <form onSubmit={formSubmitCallback}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleNameChange}
            value={itemName}
            />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={handleDescriptionChange}
            value={itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>
    </div>
  )
}

export default ItemFormContainer
