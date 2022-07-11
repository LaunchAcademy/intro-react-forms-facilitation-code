import React, { useState } from "react"
import ItemTile from "./ItemTile"

const ItemList = (props) => {

  const listItems = props.items.map((itemObject) => {
    return(
      <ItemTile
        key={itemObject.name}
        name={itemObject.name}
        description={itemObject.description}
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
