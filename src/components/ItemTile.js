import React from "react"

const ItemTile = (props) => {
  return (
    <li>
      {props.itemObject.name} : {props.itemObject.description}
    </li>
  )
}

export default ItemTile
