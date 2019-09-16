/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Menu1 from '../pages/menu1'
import Menu2 from '../pages/menu2'



const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/app/menu1" component={Menu1}></Route>
      <Route exact path="/app/menu2" component={Menu2}></Route>
    </Switch>
  </HashRouter>
)

export default BasicRoute
