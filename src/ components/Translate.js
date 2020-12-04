import React, { useState } from 'react'
import { Input, Typography } from 'antd'
import Dropdown from './Dropdown'
import Convert from './Convert'

const { Text } = Typography

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
]

const Translate = ({ items }) => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState('')

  return (
    <div>
      <Text>Enter language</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Text>Select language</Text>
      <Dropdown options={options} selected={language} onSelectedChange={setLanguage} />
      <Text>Output</Text>
      <Convert language={language} text={text} />
    </div>
  )
}

export default Translate
