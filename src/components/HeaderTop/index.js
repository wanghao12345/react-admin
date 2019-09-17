import React from 'react';
import { Menu, Layout, Icon } from "antd";
import './style.less'

const { Header } = Layout


function HeaderTop() {
  return (
    <Header className="header">
      <Icon
        className="changeFullScreen"
        type="menu-fold"
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderTop;