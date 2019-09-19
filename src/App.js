import React from 'react';
import Routes from './router'
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyled } from "./style";

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Provider store={store}>
        <GlobalStyled />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;


// https://github.com/yezihaohao/react-admin.git
