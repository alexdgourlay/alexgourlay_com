import React from 'react';

import CrossHairs from '../CrossHairs/CrossHairs';
import HeadBar from '../HeadBar/HeadBar';
import PreviewPane from '../PreviewPane/PreviewPane'
import ProjectTile from '../ProjectTile/ProjectTile';

import projects from '../../projects.json';

import './App.css'

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      github_url : 'https://raw.githubusercontent.com/alexdgourlay/alexgourlay.com/master/alexgourlay_com',
      projects: [],
      projectHovered: null,
    }

    this.handleTileEnter = this.handleTileEnter.bind(this);
    this.handleTileExit = this.handleTileExit.bind(this);
  }

  componentWillMount() {
    // Load Project data into state.
    this.setState({
      projects: projects
    })
  }

  handleTileEnter(project) {
    this.setState({
      projectHovered: project,
    })
  }

  handleTileExit() {
    this.setState({
      projectHovered: null
    })
  }


  render() {

    return (
      <div className="App">
        <CrossHairs
          tileHovered={this.state.tileHovered} >

          <HeadBar />
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
          <div className="preview-container">
            <PreviewPane 
            github_url={this.state.github_url}
            project={this.state.projectHovered} />
          </div>
        </CrossHairs>
      </div>
    );
  }
}

export default App;
