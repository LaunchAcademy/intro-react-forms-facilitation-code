import React, { useState } from "react"

const ItemFormContainer = (props) => {


  return (
    <div>
      <form >
        <label htmlFor="itemName">Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            />
        </label>

        <label htmlFor="itemDescription">Description:
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>
    </div>
  )
}

export default ItemFormContainer
