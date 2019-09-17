/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import Logo from '@/components/Logo'
import '@/style/antd/index.less'

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function LayoutMain(props) {
  const {children} = props
  return (
    <Layout>
      <Sider width={200} style={{background: '#fff'}}>
        <div className="logo">
          <Logo />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%', borderRight: 0}}
        >
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
          <SubMenu
            key="sub2"
            title={
              <span>
              <Icon type="laptop"/>
              表格
            </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
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
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutMain;
