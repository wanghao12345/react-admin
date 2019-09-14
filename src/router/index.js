/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/login'
import Layout from '../pages/layout'
import Menu1 from '../pages/menu1'
import Menu2 from '../pages/menu2'


import Home from '../pages/home'


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/layout">
        <Layout>
          <Route exact path="/menu1" component={Menu1}></Route>
          <Route exact path="/menu2" component={Menu2}></Route>
        </Layout>
      </Route>
      <Route exact path="/home" component={Home}></Route>
    </Switch>
  </HashRouter>
)

export default BasicRoute
