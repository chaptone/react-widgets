import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Accordion = ({ items }) => {
  const renderedItems = items.map(item => {
    return (
      <Panel header={item.title} key={item.title}>
        <p>{item.content}</p>
      </Panel>
    )
  })

  return (
    <Collapse accordion>
      {renderedItems}
    </Collapse>
  )
}

export default Accordion