/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';
import { Layout } from 'antd'
import Logo from '@/components/Logo'
import SiderMenu from '@/components/SiderMenu'
import HeaderTop from '@/components/HeaderTop'
import BreadCrumb from '@/components/BreadCrumb'
import { connect } from 'react-redux'
import '@/style/antd/index.less'

const { Content, Sider } = Layout;

function LayoutMain(props) {
  const {children, location} = props

  if (location.pathname === '/login') {
    return (
      <div>
        {children}
      </div>
    )
  } else {
    return (
      <Layout>
        <Sider width={props.fullScreen ? 0 : 200} style={{background: '#fff'}}>
          <div className="logo">
            <Logo />
          </div>
          <SiderMenu location={ location } />
        </Sider>
        <Layout>
          <HeaderTop />
          <Layout style={{padding: '0 20px 20px'}}>
            <BreadCrumb location={ location } />
            <Content>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}






/**
 * 将仓库的state映射到props(获取state)
 */
const mapStateToProps = (state) => {
  return {
    fullScreen: state.getIn(['header', 'fullScreen'])
  }
}

/**
 * 将dispatch映射到props(改变state)
 */
const mapDispatchToProps = (dispatch) => {
  return {

  }
}




export default connect(mapStateToProps, mapDispatchToProps)(LayoutMain);
