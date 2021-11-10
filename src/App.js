import './App.css';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './router/index'
import Frame from './compontents/Frame/index'
function App() {
  return (
    <Frame>
      <Switch>
        {adminRoutes.map(route => {
          return <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={routeProps => {
              return <route.component {...routeProps} />
            }}
          />
        })}
        {/* <Redirect to="/404"></Redirect> */}
      </Switch>
    </Frame>
  );
}

export default App;
