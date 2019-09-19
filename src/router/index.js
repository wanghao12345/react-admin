/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Layout from '../pages/Layout'
import config from './config'
import AllComponents from '../pages'
import ReactDocumentTitle from 'react-document-title'

const BasicRoute = () => {
  let routers = [];
  Object.keys(config).map(key => {
    config[key].map(r => {
      const route = r => {
        const Component = AllComponents[r.component]
        routers.push(<Route
          key={r.key}
          exact
          path={r.key}
          render={
            () => (
              <ReactDocumentTitle title={r.title + ' - 后台管理系统'}>
                <Component />
              </ReactDocumentTitle>
            )
          }
        />)
      }
      return r.component ? route(r) : r.subs.map( r => route(r))
    })
  })

  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          { routers }
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}
console.log(BasicRoute);
export default BasicRoute
