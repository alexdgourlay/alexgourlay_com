import React from 'react';

import CrossHairs from './components/CrossHairs/CrossHairs';
import HeadBar from './components/HeadBar/HeadBar';
import ProjectTile from './components/ProjectTile/ProjectTile';

import projects from './projects.json'

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
            tileHovered={this.state.tileHovered} 
            hoveredRect={this.state.hoveredRect}>

          {/* <HeadBar /> */}
          {
            this.state.projects.map((project, i) => (
              <ProjectTile
                key={project.id}
                project={project}
                handleTileEnter={this.handleTileEnter}
                handleTileExit={this.handleTileExit} />
            ))
          }
        </CrossHairs>
      </div>
    );
  }
}

export default App;
