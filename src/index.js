import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Main from './pages/Main'
import FourOhFour from './pages/FourOhFour'
import AddCoins from './pages/AddCoins'

import HeaderContainer from './containers/HeaderContainer'
import Footer from './components/Footer'
import CardContainer from './containers/CardContainer'
import HistoryCard from './components/HistoryCard'

import './sass/main.scss';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <HeaderContainer />
          <Switch>
            <Route exact path='/react-reward-store'>
              <Main text='Electronics'
                bgImage='electronic'
                CardComponent={CardContainer}
                endpoint='products' />
            </Route>
            <Route path='/react-reward-store/history'>
              <Main text='History'
                bgImage='shop'
                CardComponent={HistoryCard}
                endpoint='user/history'/>
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
    </Provider>,
  document.getElementById('root')
);
