import React from 'react'
import { Select, Layout } from 'antd'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }
    return (
      <Select.Option value={option.value} title={option.label}>
        {option.label}
      </Select.Option>
    )
  })

  return (
    <Layout>
      <Select
        defaultValue=""
        value={selected.label}
        onSelect={(v, o) => onSelectedChange({ label: o.title, value: v })}
      >
        {renderedOptions}
      </Select>
    </Layout>
  )
}

export default Dropdown
