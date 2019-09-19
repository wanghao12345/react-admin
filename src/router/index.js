/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Menu1 from '../pages/menu1'
import Menu2 from '../pages/menu2'
import Home from '../pages/Home'
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Layout from '../pages/Layout'


const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/app/menu1" name="menu1" component={Menu1}></Route>
        <Route exact path="/app/menu2" name="menu2" component={Menu2}></Route>
        <Route exact path="/app/home" name="home" component={Home}></Route>
        <Route path="/404" name="404" component={NotFound} />
        <Route path="/login" name="login" component={Login} />
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default BasicRoute
