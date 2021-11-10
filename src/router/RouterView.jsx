import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { Switch, Route } from 'react-router-dom'
// import RedirectRouterView from './RedirectRouterView'
import { adminRoutes } from './index'
function RouterView() {
  const renderRoute = (adminRoutes) => {
    return adminRoutes.map(item => {
      if (item.children) {
        return renderRoute(item.children)
      } else {
        return item.path === '/' ? null : <Route
          path={ item.path }
          key={item.path}
          exact
          component = { item.component } />
        }
    })
  }
  return (
    <Suspense fallback={<div className="loading"><Spin size="large" /></div>} >
      <Switch>
        {/* <Redirect path="/" exact to="/home" /> */}
        {
          renderRoute(adminRoutes)
        }
        {/* <Route path="/" exact component = { lazy(() => import('../../views/home/Index'))} /> */}
        {/* <RedirectRouterView /> */}
        {/* <Redirect path="/bannermanager" to="/bannermanager/list" />
        <Redirect path="/navigatormanager" to="/navigatormanager/list" />
        <Redirect path="/seckillmanager" to="/seckillmanager/list" />
        <Redirect path="/usermanager" to="/usermanager/list" /> */}
      </Switch>
    </Suspense>
)
}
export default RouterView