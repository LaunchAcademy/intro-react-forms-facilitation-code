import React, { useState } from 'react';

import ItemFormContainer from './ItemFormContainer';
import ItemList from "./ItemList"

const App = (props) => {
  const [items, setItems] = useState(["mic", "peptobismol"])

  const addItem = (nameFieldState) => {
    const newItemStateArray = items.concat(nameFieldState)
    const newItemStateArray = [...items, nameFieldState]

    setItems(newItemStateArray)
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
          fakeProp="fakkkeee"
        />
      </div>
    </div>
  )
}

export default App;
