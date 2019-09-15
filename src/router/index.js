/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../pages/Layout'
import Menu1 from '../pages/menu1'
import Menu2 from '../pages/menu2'


import Home from '../pages/Home'


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/layout" component={Layout}></Route>
      <Route exact path="/home" component={Home}></Route>
    </Switch>
  </HashRouter>
)

export default BasicRoute
