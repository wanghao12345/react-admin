import React from 'react';
import {Breadcrumb} from "antd";
import config from '../../router/config'

function BreadCrumb(props) {
  const { location } = props

  config.menus.map(item => {



  })



  console.log(props);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;