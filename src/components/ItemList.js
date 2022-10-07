import React, { useState } from "react"
import ItemTile from "./ItemTile"

const ItemList = (props) => {


  const listItems = props.items.map((itemObject) => {
    return(
      <ItemTile
        key={itemObject.itemName}
        // itemName={itemObject.itemName}
        // itemDescription={itemObject.itemDescription}
        {...itemObject}
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
