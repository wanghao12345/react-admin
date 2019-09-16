/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';

function Layout(props) {
  const { children } = props
  return (
    <div className="LayoutWrapper">
      { children }
    </div>
  );
}

export default Layout;
