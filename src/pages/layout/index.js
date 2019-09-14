/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';

function Layout() {
  return (
    <div className="LayoutWrapper">
      layout
      {this.props.children}
    </div>
  );
}

export default Layout;
