import React, { useState } from "react"

import ItemForm from './ItemForm';
import ItemList from "./ItemList"

const App = (props) => {

  const [items, setItems] = useState([
    {itemName: "popcorn", itemDescription: "makes greasy hands"}, 
    {itemName: "Chocolate", itemDescription: "Don't leave it in the sun"}, 
    {itemName: "Coffee", itemDescription: "Essential life fuel"},
  ])

  const addFormDataToItems = (allDataFromForm) => {
    debugger
    // const clonedItemsPlusNewItem = items.concat(allDataFromForm)
    
    const clonedItemsPlusNewItem = [...items, allDataFromForm]
    debugger
    setItems(clonedItemsPlusNewItem)
  }

  return (
    <div>
      <div>
        <h1>Let's gather some supplies!</h1>
        <ItemList
          items={items}
        />

        <ItemForm 
          addFormDataToItems={addFormDataToItems}
        />
      </div>
    </div>
  )
}

export default App
