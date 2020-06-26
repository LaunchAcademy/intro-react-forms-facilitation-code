import React, { useState } from "react"
import ItemTile from "./ItemTile"

const ItemList = (props) => {

  const listItems = props.items.map((itemObject) => {
    return(
      <ItemTile
        itemObject={itemObject}
      />
  )})

  return (
    <ul>
      Items
      {listItems}
    </ul>
  )
}

export default ItemList
