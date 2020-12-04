import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from '@/App.js'
import Demo from 'pages/demo'

export const RouterConfig = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/demo" component={Demo} />
    </Switch>
  </Router>
)

export default RouterConfig