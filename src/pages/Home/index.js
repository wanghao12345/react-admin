/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';
import ReactDocumentTitle from 'react-document-title'

function Home(props) {
  return (
    <ReactDocumentTitle title="首页-后台管理系统">
      <div className="HomeWrapper" onClick={() => props.history.push('/app/menu1')}>
        home
      </div>
    </ReactDocumentTitle>
  );
}

export default Home;
