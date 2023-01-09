import React, { useState } from 'react';

import ItemFormContainer from './ItemFormContainer';
import ItemList from "./ItemList"

const App = (props) => {
  const [items, setItems] = useState([
    {itemName: "popcorn", itemDescription: "makes greasy hands"}, 
    {itemName: "Chocolate", itemDescription: "Don't leave it in the sun"}, 
    {itemName: "Coffee", itemDescription: "Essential life fuel"},
  ])

  const addItem = (fieldState) => {
    // setItems(items.concat(fieldState))
    setItems([...items, fieldState])
  }


  return (
    <div>
      <div>
        <h1>Let's gather some supplies!</h1>
        <ItemList
          items={items}
        />

        <ItemFormContainer 
          addItem={addItem}
        />

      </div>
    </div>
  )
}

export default App;
