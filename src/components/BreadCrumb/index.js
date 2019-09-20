import React from 'react';
import {Breadcrumb} from "antd";
import config from '../../router/config'

function BreadCrumb(props) {
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
    return key
  });

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        arr.map(r => (<Breadcrumb.Item key={ r }>{ r }</Breadcrumb.Item>))
      }
    </Breadcrumb>
  );
}

export default BreadCrumb;