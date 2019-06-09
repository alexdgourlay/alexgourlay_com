import React from 'react';

import CrossHairs from '../CrossHairs/CrossHairs';
import HeadBar from '../HeadBar/HeadBar';
import ProjectTile from '../ProjectTile/ProjectTile';

import projects from '../../resources/projects.json'

import './App.css'

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      projects: [],
      tileHovered: null,
    }

    this.handleTileEnter = this.handleTileEnter.bind(this);
    this.handleTileExit = this.handleTileExit.bind(this);
  }

  componentWillMount() {
    this.setState({
      projects: projects
    })
  }

  handleTileEnter(projectID) {
    this.setState({
      tileHovered: projectID,
    })
  }

  handleTileExit(projectID) {
    this.setState({
      tileHovered: null
    })
  }

  render() {
    return (
      <div className="App">
        <CrossHairs
          tileHovered={this.state.tileHovered} >

          {/* <HeadBar /> */}
          <div className="tiles">
            {
              this.state.projects.map((project, i) => (
                <ProjectTile
                  key={project.id}
                  project={project}
                  handleTileEnter={this.handleTileEnter}
                  handleTileExit={this.handleTileExit} />
              ))
            }
          </div>
          <div className="container">
            <img className="img"
              alt=''
              src={require('../../resources/projects/0_AXPendula/A_AXPendula.JPG')}
            />
          </div>
        </CrossHairs>
      </div>
    );
  }
}

export default App;
