import React from 'react';
import Routes from './router'
import Layout from './pages/Layout'

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;


// https://github.com/yezihaohao/react-admin.git
