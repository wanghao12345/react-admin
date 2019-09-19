import React from 'react';
import { Menu, Icon } from "antd";
import menuList from '@/router/config'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

function SiderMenu(props) {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{height: '100%', borderRight: 0}}
      selectedKeys={[props.location.pathname]}
    >
      {
        menuList.menus.map((item) => {
          if (item.subs) {
            return <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon}/>
                  {item.title}
                </span>
              }
              >
              {
                item.subs.map((item1) => {
                  return <Menu.Item key={ item1.key }>
                    <Link to={ item1.key }>
                      { item1.title }
                    </Link>
                  </Menu.Item>
                })
              }
              </SubMenu>
          } else {
            return <Menu.Item key={ item.key}>
              <Link to={ item.key }>
                <Icon type={ item.icon } />
                { item.title }
              </Link>
            </Menu.Item>
          }
        })
      }
    </Menu>
  );
}

export default SiderMenu;