import React, { useState } from 'react';

import ItemFormContainer from './ItemFormContainer';
import ItemList from "./ItemList"

const App = (props) => {
  const [items, setItems] = useState([{itemName: "popcorn", description: "makes greasy hands"}, {itemName: "Chocolate", description: "Don't leave it in the sun"}, {itemName: "Coffee", description: "Essential life fuel"} ])

  const addItem = (fieldState) => {
    const newItemArray = items.concat(fieldState)

    setItems(newItemArray)
  }

  return (
    <div>
      <div>
        <h1>Let's uh....track some items?</h1>
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
