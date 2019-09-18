import React from 'react';
import { Menu, Layout, Icon } from "antd";
import { connect } from 'react-redux'
import { actionCreators } from './store'
import './style.less'

const { Header } = Layout


function HeaderTop(props) {
  return (
    <Header className="header">
      <Icon
        className="changeFullScreen"
        type={props.fullScreen ? 'menu-unfold' : 'menu-fold'}
        onClick={props.handleChangeFullScreen}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">{props.fullScreen ? '全屏' : '不全屏'}</Menu.Item>
      </Menu>
    </Header>
  );
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
    // 改变
    handleChangeFullScreen () {
      dispatch(actionCreators.changeFullscreen())
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);