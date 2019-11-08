import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeadBar from '../HeadBar/HeadBar';
import ConnectFooter from '../ConnectFooter/ConnectFooter.js';

import P5Wrapper from 'react-p5-wrapper';
import { sketch } from '../../p5Sketch';

import PageHome from '../PageHome/PageHome';
import PageAboutMe from '../PageAboutMe/PageAboutMe';
import PageProjectTemplate from '../PageProject/PageProjectTemplate';
import Page404 from '../Page404/Page404'

class App extends React.Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div id="canvas">
          <P5Wrapper sketch={sketch} />
        </div>
        <HeadBar />
        <div>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/AboutMe" component={PageAboutMe} />
            <Route exact path="/Projects/:projectKey" component={PageProjectTemplate} />
            <Route component={Page404} />
          </Switch>
        </div>
        <ConnectFooter />
      </Router>
    )
  }
}

export default App;