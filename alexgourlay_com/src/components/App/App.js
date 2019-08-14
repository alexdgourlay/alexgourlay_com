import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeadBar from '../HeadBar/HeadBar';

import PageHome from '../PageHome/PageHome';
import PageAboutMe from '../PageAboutMe/PageAboutMe';
import PageProject from '../PageProject/PageProject';
import Page404 from '../Page404/Page404'

class App extends React.Component {

  render() {
    return (
      <Router>
        <HeadBar />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/AboutMe" component={PageAboutMe} />
          <Route path="/Projects/:projectTitle" exact component={PageProject} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default App;