import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Electronics from './pages/Electronics'
import FourOhFour from './pages/FourOhFour'
import AddCoins from './pages/AddCoins'
import History from './pages/History'
import Shop from './pages/Shop'

import Header from './components/Header'
import Footer from './components/Footer'

import './sass/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Electronics />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/addCoins'>
            <AddCoins />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/404' key='fourOhFour'>
            <FourOhFour />
          </Route>
          <Redirect to="/404" />
        </Switch>  
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
