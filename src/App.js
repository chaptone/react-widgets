import React, { useState } from 'react'
import Accordion from './ components/Accordion'
import Dropdown from './ components/Dropdown'
import Search from './ components/Search'

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
  const [selected, setSelected] = useState(options[0].label)
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
    </div>
  )
}

export default App