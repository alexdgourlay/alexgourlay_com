import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeadBar from '../HeadBar/HeadBar';
import ConnectFooter from '../ConnectFooter/ConnectFooter.js';

import PageHome from '../PageHome/PageHome';
import PageAboutMe from '../PageAboutMe/PageAboutMe';
import PageProjectTemplate from '../PageProject/PageProjectTemplate';
import Page404 from '../Page404/Page404'

class App extends React.Component {

  render() {
    return (
      <Router>
        <HeadBar />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/AboutMe" component={PageAboutMe} />
          <Route path="/Projects/:projectKey" exact component={PageProjectTemplate} />
          <Route component={Page404} />
        </Switch>
        <ConnectFooter />
      </Router>
    )
  }
}

export default App;