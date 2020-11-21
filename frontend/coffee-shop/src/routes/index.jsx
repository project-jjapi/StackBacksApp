import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../pages/Layout'
import Home from '../pages/Home'
const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  </Router>
)

export default App
