import React from "react"

const ItemTile = ({ name, description }) => {
  // const name = props.itemObject.name
  // const description = props.itemObject.description

  return (
    <li>
      {name}: {description}
    </li>
  )
}

export default ItemTile
