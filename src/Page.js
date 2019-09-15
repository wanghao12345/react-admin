/**
 * Created by wanghao on 2019/9/15
 */
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import App from './App'

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={
        () => <Redirect to="/home" push />
      } />
      <Route path="/app" component={App} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

