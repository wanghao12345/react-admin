import React from 'react';
import { Menu, Icon } from "antd";

const { SubMenu } = Menu

function SiderMenu() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{height: '100%', borderRight: 0}}
    >
      <Menu.Item key="0">
        <Icon type="copy" />
        首页
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
              <Icon type="user"/>
              首页
            </span>
        }
      >
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default SiderMenu;