import React, { useState } from "react"

import ItemFormContainer from "./ItemFormContainer"
import ItemList from "./ItemList"

const App = (props) => {
  const [items, setItems] = useState([
    { name: "popcorn", description: "makes greasy hands" },
    { name: "Chocolate", description: "Don't leave it in the sun" },
    { name: "Coffee", description: "Essential life fuel" },
  ])

  const addItem = (fieldState) => {
    // debugger
//     const newItemArray = items.concat(fieldState)
// // debugger
//     setItems(newItemArray)

    setItems([...items, fieldState])
  }

  return (
    <div>
      <div>
        <h1>Let's uh....track some items?</h1>
        <ItemList items={items} />
        <ItemFormContainer addItem={addItem} />
      </div>
    </div>
  )
}

export default App
