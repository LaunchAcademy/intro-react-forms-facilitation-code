import React, { useState } from 'react';

import ItemFormContainer from './ItemFormContainer';
import ItemList from "./ItemList"

const App = (props) => {
  const [items, setItems] = useState([
    {name: "popcorn", description: "makes greasy hands"}, 
    {name: "Chocolate", description: "Don't leave it in the sun"}, 
    {name: "Coffee", description: "Essential life fuel"} 
  ])

  const addItem = (fieldState) => {
    const newItemArray = items.concat(fieldState)

    setItems(newItemArray)
  }

  return (
    <div>
      <div>
        <h1>Let's uh....track some items?</h1>
        <ItemFormContainer 
          addItem={addItem}
        />

        <ItemList
          items={items}
        />
      </div>
    </div>
  )
}

export default App;
