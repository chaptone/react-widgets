import React, { useState } from 'react'
import Accordion from './ components/Accordion'
import Dropdown from './ components/Dropdown'
import Header from './ components/Header'
import Route from './ components/Route'
import Search from './ components/Search'
import Translate from './ components/Translate'

const items = [
  {
    title: 'Title 1',
    content: `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `,
  },
  {
    title: 'Title 2',
    content: `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `,
  },
  {
    title: 'Title 3',
    content: `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `,
  },
]

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
  {
    label: 'The color green',
    value: 'green',
  },
]

const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App
