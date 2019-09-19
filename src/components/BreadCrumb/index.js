import React from 'react';
import {Breadcrumb} from "antd";
import config from '../../router/config'

function BreadCrumb(props) {
  console.log(props);

  const { location } = props
  let arr = []
  Object.keys(config).map(key => {
    config[key].map(r => {
      const route = r => {
        if (r.key === location.pathname ) {
          arr = r.breadCrumb
        }
      }
      if (r.key === location.pathname ) {
        arr = r.breadCrumb
      }
      return r.component ? route(r) : r.subs.map( r => route(r))
    })
  });
  console.log(arr);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        arr.map(r => (<Breadcrumb.Item>{ r }</Breadcrumb.Item>))
      }
    </Breadcrumb>
  );
}

export default BreadCrumb;