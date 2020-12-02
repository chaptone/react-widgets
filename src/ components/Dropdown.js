import React from 'react'
import { Input, Select, Layout } from 'antd';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }
    return (
      <Select.Option value={option.value}>{option.label}</Select.Option>
    )
  })

  return (
    <Layout>
      <Select defaultValue="" value={selected.label} onChange={(v) => onSelectedChange(v)}>
        {renderedOptions}
      </Select>
    </Layout>
  )
}

export default Dropdown