import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Electronics from './pages/Electronics'
import FourOhFour from './pages/FourOhFour'
import AddCoins from './pages/AddCoins'
import History from './pages/History'

import Header from './components/Header'
import Footer from './components/Footer'

import './sass/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Switch>
          <Route exact path='/react-reward-store'>
            <Electronics />
          </Route>
          <Route path='/react-reward-store/history'>
            <History />
          </Route>
          <Route path='/react-reward-store/addCoins'>
            <AddCoins />
          </Route>
          <Route path='/react-reward-store/404' key='fourOhFour'>
            <FourOhFour />
          </Route>
          <Redirect to="/react-reward-store/404" />
        </Switch>  
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
