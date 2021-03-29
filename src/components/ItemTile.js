import React from "react"

const ItemTile = (props) => {
  return (
    <li>
      {props.itemObject.itemName} : {props.itemObject.itemDescription}
    </li>
  )
}

export default ItemTile
