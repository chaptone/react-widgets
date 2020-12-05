import React from 'react'
import { Menu } from 'antd'

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="accordion">
        <a href="/">Accordion</a>
      </Menu.Item>
      <Menu.Item key="list">
        <a href="/list">List</a>
      </Menu.Item>
      <Menu.Item key="dropdown">
        <a href="/dropdown">Dropdown</a>
      </Menu.Item>
      <Menu.Item key="translate">
        <a href="/translate">Translate</a>
      </Menu.Item>
    </Menu>
  )
}

export default Header
