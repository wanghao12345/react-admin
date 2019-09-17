/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';
import { Layout } from 'antd'
import Logo from '@/components/Logo'
import SiderMenu from '@/components/SiderMenu'
import HeaderTop from '@/components/HeaderTop'
import BreadCrumb from '@/components/BreadCrumb'
import '@/style/antd/index.less'

const { Content, Sider } = Layout;

function LayoutMain(props) {
  const {children} = props
  return (
    <Layout>
      <Sider width={200} style={{background: '#fff'}}>
        <div className="logo">
          <Logo />
        </div>
        <SiderMenu />
      </Sider>
      <Layout>
        <HeaderTop />
        <Layout style={{padding: '0 24px 24px'}}>
          <BreadCrumb />
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutMain;
