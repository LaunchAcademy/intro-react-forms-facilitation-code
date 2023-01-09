import React from "react"

const ItemTile = ({ itemName, itemDescription }) => {


  // const itemName = props.itemName
  // const itemDescription = props.itemDescription

  // const { itemName, itemDescription } = props 

  return (
    <li>
      {itemName}: {itemDescription}
    </li>
  )
}

export default ItemTile
