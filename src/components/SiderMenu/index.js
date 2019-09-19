import React from 'react';
import { Menu, Icon } from "antd";
import menuList from '@/router/config'

const { SubMenu } = Menu

function SiderMenu() {
  let menus = []
  menuList.menus.map((item, index) => {
    if (item.subs) {
      menus.push(
        <SubMenu
          key={item.key}
          title={
            <span>
              <Icon type={item.icon}/>
              {item.title}
              </span>
          }
        >
          {
            item.subs.map((item1, index1) => {
              return <Menu.Item key={ item1.key }>{ item1.title }</Menu.Item>
            })
          }
      </SubMenu>)
    } else {
      menus.push(<Menu.Item key={ item.key}>
        <Icon type={item.icon} />
        {item.title}
      </Menu.Item>)
    }
  });
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{height: '100%', borderRight: 0}}
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
                  return <Menu.Item key={ item1.key }>{ item1.title }</Menu.Item>
                })
              }
              </SubMenu>
          } else {
            return <Menu.Item key={ item.key}>
              <Icon type={item.icon} />
              {item.title}
            </Menu.Item>
          }
        })
      }
    </Menu>
  );
}

export default SiderMenu;