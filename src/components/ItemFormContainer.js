import _ from "lodash"
import React, { useState } from "react"

import ErrorList from "./ErrorList"

const ItemFormContainer = (props) => {

  const [errors, setErrors] = useState({})
  
  const [fieldValues, setFieldValues] = useState({
    itemName: "",
    itemDescription: ""
  })


  const handleFieldChange = (event) => {

    const newObject = {
      ...fieldValues,
      [event.currentTarget.name]: event.currentTarget.value
    }

    setFieldValues(newObject)
  }

  // const [nameValue, changeNameValue] = useState("")
  // const [descriptionValue, changeDescriptionValue] = useState("")

  // const handleNameChange = (event) => {
  //   changeNameValue(event.currentTarget.value)
  // }
  
  // const handleDescriptionChange = (event) => {
  //   changeDescriptionValue(event.currentTarget.value)
  // }

  const clearFormState = () => {
    setFieldValues({
      itemName: "",
      itemDescription: ""
    })
  }

  const validForSubmission = () => {
    const requiredFields = ["itemName", "itemDescription"]

    let errorsForSubmission = {}

    requiredFields.forEach(field => {
      if (fieldValues[field] === ""){
        errorsForSubmission[field] = "is blank"
      }
    })

    setErrors(errorsForSubmission)
    return _.isEmpty(errorsForSubmission)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (validForSubmission() === true){
      props.addItem(fieldValues)
    } 
  }

  return (
    <div>
      
      <ErrorList errors={errors} />

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={handleFieldChange}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button onClick={clearFormState}>
        Clear Form
      </button>
    </div>
  )
}

export default ItemFormContainer


// const validForSubmission = () => {
//   let submitErrors = {}
//   const requiredFields = ["title", "description"]

//   requiredFields.forEach((field) => {
//     if (fieldState[field].trim() === ""){
//       submitErrors = {
//         ...submitErrors,
//         [field]: "is blank"
//       }
//     }
//   })

//   setErrors(submitErrors)
//   return _.isError(submitErrors)
// }