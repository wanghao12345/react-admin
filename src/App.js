import React from 'react';
import Routes from './router'
import Layout from './pages/Layout'

import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;


// https://github.com/yezihaohao/react-admin.git
