import React from "react"

const ItemTile = (props) => {
  return (
    <li>
      {props.itemObject.itemName} 
      <br></br>
      {props.itemObject.itemDescription}
    </li>
  )
}

export default ItemTile
