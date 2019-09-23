/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from "../pages/Login";
import Layout from '../pages/Layout'
import config from './config'
import AllComponents from '../pages'
import ReactDocumentTitle from 'react-document-title'

const BasicRoute = (props) => {
  const { userInfo } = props
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
            () => {
              const wrappedComponent = (
                <ReactDocumentTitle title={r.title + ' - 后台管理系统'}>
                  <Component />
                </ReactDocumentTitle>
              )
              return wrappedComponent
              // return userInfo ? wrappedComponent : (<Redirect to={{
              //   pathname: '/login',
              //   state: { from: r.key }
              // }}/>)
            }
          }
        />)
      }
      return r.component ? route(r) : r.subs.map( r => route(r))
    })
    return key
  });
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          { routers }
          <Route path="/login" component={Login} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}


/**
 * 将仓库的state映射到props(获取state)
 */
const mapStateToProps = (state) => {
  return {
    userInfo: state.getIn(['user', 'userInfo'])
  }
}
export default connect(mapStateToProps, null)(BasicRoute)
