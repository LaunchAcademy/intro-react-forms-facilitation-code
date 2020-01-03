import React, { useState } from "react"

const ItemList = ({ items, fakeProp }) => {
  const { items, fakeProp } = props
  // const items = props.items

  const listItems = items.map((item) => {
    return(
    <li key={item}>
      {item}
    </li>)
  })

  return (
    <ul>
      Items
      {listItems}
    </ul>
  )
}

export default ItemList
