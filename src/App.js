import React from 'react'
import Accordion from './ components/Accordion'

const items = [
  {
    title: 'Title 1',
    content: `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `
  },
  {
    title: 'Title 2',
    content: `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `
  },
  {
    title: 'Title 3',
    content: `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `
  }
]

const App = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App