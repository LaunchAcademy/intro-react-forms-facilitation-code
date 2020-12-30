import React from "react"

const ItemTile = (props) => {
  return (
    <li>
      {props.itemObject.name} 
      <br></br>
      {props.itemObject.description}
    </li>
  )
}

export default ItemTile
