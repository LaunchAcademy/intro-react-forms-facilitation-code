import React from "react"

import ItemTile from "./ItemTile"

const ItemList = (props) => {

  // debugger
  const listItems = props.items.map((itemObject) => {
    return(
      <ItemTile
        key={itemObject.name}
        itemObject={itemObject}
      />
  )})

  return (
    <ul>
      <h3>Items</h3>
      <ul>
        {listItems}
      </ul>
    </ul>
  )
}

export default ItemList
