import React, { useState } from "react"
import ItemTile from "./ItemTile"

const ItemList = (props) => {

  // debugger
  const listItems = props.items.map((itemObject) => {
    return(
      <ItemTile
        key={itemObject.itemName}
        itemObject={itemObject}
      />
  )})

  return (
    <ul>
      <h3>Items</h3>
      {listItems}
    </ul>
  )
}

export default ItemList
