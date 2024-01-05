import React, { useState } from "react"
import ErrorList from "./ErrorList"

import _ from 'lodash'

const ItemForm = (props) => {

  const [itemObject, setItemObject] = useState({
    itemName: "",
    itemDescription: ""
  })

  const [errors, setErrors] = useState({})

  const trackUserTyping = (event) => {

    setItemObject({
      ...itemObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const isValid = () => {
    let someErrors = {}
    const requiredFields = ["itemName", "itemDescription"]

    requiredFields.forEach((reqField) => {
      if (itemObject[reqField].trim() === "") {
        someErrors = {...someErrors, [reqField]: "is blank"}
      }
    })

    setErrors(someErrors)
    return _.isEmpty(someErrors)
  }


  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (isValid() === true) { 
      props.addFormDataToItems(itemObject)
      resetTheFormState()
    }
    
    // if (itemObject.itemName.trim() === "" && itemObject.itemDescription.trim() === "") {
    //   setErrors({ itemName: "is blank", itemDescription: "is blank"})
    // } else if (itemObject.itemName.trim() === "") {
    //   setErrors({ itemName: "is blank"})
    // } else if (itemObject.itemDescription.trim() === "") {
    //   setErrors({ itemDescription: "is blank"})
    // } else {
    //   setErrorMessage("")
    //   props.addFormDataToItems(itemObject)
    //   resetTheFormState()
    // }
  }

  const resetTheFormState = () => {
    setItemObject({
      itemName: "",
      itemDescription: ""
    })
  }


  // let error 
  // if (!_.isEmpty(errors)) {
  //   let errorMessages = ""
  //   // turn the key value pairs in errors into a string
  //   Object.keys(errors).forEach((key) => {
  //     errorMessages += `${key} ${errors[key]} `
  //   })

  //   error = <h4>{errorMessages}</h4>
  // }

  return (
    <div>
      <ErrorList errors={errors} />

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
