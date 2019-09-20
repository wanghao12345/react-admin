import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import './style.less'

const menu = (
  <Menu>
    <Menu.Item>
      <NavLink to="/app/home">个人信息</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/login">退出</NavLink>
    </Menu.Item>
  </Menu>
)

function PersonDropDown() {
  return (
    <Dropdown overlay={menu}>
      <a href="/app/home" className="ant-dropdown-link">
        <Icon className="user-icon" type="user" />
        小明
        <Icon type="down" className="down-icon" />
      </a>
    </Dropdown>
  )
}


export default PersonDropDown