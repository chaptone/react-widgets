import React from 'react'
import Accordion from './ components/Accordion'

const items = [
  {
    title: 'wkjsdlfkdjs',
    content: 'dsflkjdslfkdsflkdsjflkdsjfk'
  },
  {
    title: 'sfd',
    content: 'sdf123213wrdw'
  },
  {
    title: 'sdfsfdsfd',
    content: 'sdf123212321321312312313wrdw'
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