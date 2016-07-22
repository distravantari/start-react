import React from 'react'
import Main from '../components/Main'

import { Router, Route, IndexRoute, BrowserHistory, useRouterHistory } from 'react-router'

// import createHashHistory from 'history/lib/createHashHistory'
// const history = useRouterHistory(createHashHistory)({ queryKey: false })

export default (
  // <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Main}/>
    </Route>
  // </Router>
)
