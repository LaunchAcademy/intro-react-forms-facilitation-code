import React from "react"

const ItemTile = (props) => {
  return (
    <li>
      {props.itemObject.itemName} : {props.itemObject.description}
    </li>
  )
}

export default ItemTile
