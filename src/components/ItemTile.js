import React from "react"

const ItemTile = ({ itemName, itemDescription }) => {

  // const { itemName, itemDescription } = props

  // const itemName = props.itemName
  // const itemDescription = props.itemDescription

  return (
    <li>
      {itemName} : {itemDescription}
    </li>
  )
}

export default ItemTile
