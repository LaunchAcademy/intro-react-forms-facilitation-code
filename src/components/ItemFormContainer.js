import React, { useState } from "react"
import _ from "lodash"

import ErrorList from "./ErrorList"

const ItemFormContainer = (props) => {
  // const [itemName, setItemName] = useState("")
  // const [itemDescription, setItemDescription] = useState("")

  const [formFieldsState, setFormFieldsState]= useState({ 
    itemName: "",
    itemDescription: ""
  })

  const [errors, setErrors] = useState({})

  const handleClearForm = () => {
    setFormFieldsState({itemName: "", itemDescription: ""})
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (validateAllFields() === true){
      props.addItem({
        name: formFieldsState.itemName,
        description: formFieldsState.itemDescription
      })

      handleClearForm()
    }
  }

  const validateAllFields = () => {
    let submitErrors
    const requiredFields = ["itemName", "itemDescription"]

    requiredFields.forEach(field => {
      if (formFieldsState[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const listenToFieldChange = (event) => {
    setFormFieldsState({ 
      ...formFieldsState,
      [event.currentTarget.name]: event.currentTarget.value, 
    })
  }

  // const listenToNameChange = (event) => {
  //   setItemName(event.currentTarget.value)
  // }

  // const listenToDescriptionChange = (event) => {
  //   setItemDescription(event.currentTarget.value)
  // }

  return (
    <div>

      <ErrorList errors={errors} />

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="itemName">
          Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={listenToFieldChange}
            value={formFieldsState.itemName}
          />
        </label>

        <label htmlFor="itemDescription">
          Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            onChange={listenToFieldChange}
            value={formFieldsState.itemDescription}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button className="button" onClick={handleClearForm}> 
        Clear Form Button 
      </button>
    </div>
  )
}

export default ItemFormContainer
