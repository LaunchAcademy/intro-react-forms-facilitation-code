import React, { useState } from "react"

const ItemFormContainer = (props) => {
  // const [itemName, setItemName] = useState("i have hijacked the name field")
  // const [itemDescription, setItemDescription] = useState("ooooohhh look at me")

  const [itemData, setItemData] = useState({
    name: "",
    description: ""
  })

  // const [errors, setError] = useState({})

  const formSubmitCallback = (event) => {
    event.preventDefault()

    props.addItem(itemData)

    // // to clear form after submission
    handleClearForm()
    // setItemData({
    //   name: "",
    //   description: ""
    // })
  }
  
  const handleClearForm = () => {
    // this was slightly refactored to remove the `event.preventDefault()`
    // so that this function can be used to attach to the clear button,
    // and used to clear the form after submission
    // in order for this to be possible, a `type="button"` was added to the Clear Form button
    // a type of button does not have any default behavior
    // so `event.preventDefault()` is then not required
    // this allows us to call on this function without a synthetic `event` being required
    // you'll see that on line 20 we can call on this function now without supplying an argument of `event`
    console.log("Clear button clicked!")
    
    // setItemName("")
    // setItemDescription("")
    
    setItemData({
      name: "",
      description: ""
    })
  }



  const handleChange = (event) => {
    // debugger

    setItemData({
      ...itemData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  // const handleDescriptionChange = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  return (
    <div className="callout secondary">
      <form onSubmit={formSubmitCallback}>
        
        {/* <ErrorList errors={errors} /> */}
        
        <label htmlFor="name">Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={itemData.name}
          />
        </label>

        <label htmlFor="description">Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            value={itemData.description}
          />
        </label>

        <input type="submit" value="Submit Item" />
        <button type="button" onClick={handleClearForm}>Clear Form</button>
      </form>
    </div>
  )
}

export default ItemFormContainer
