import React from 'react';
// import Autoresponsive from 'autoresponsive-react'

import CrossHairs from '../CrossHairs/CrossHairs';
import PreviewPane from '../PreviewPane/PreviewPane';
import ProjectTile from '../ProjectTile/ProjectTile';
import ConnectFooter from '../ConnectFooter/ConnectFooter';

import projects from '../../data/projects.json';

import './PageHome.css'

class PageHome extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      github_url: 'https://raw.githubusercontent.com/alexdgourlay/alexgourlay.com/master/alexgourlay_com',
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
      projectEntered: true,
    })
  }

  handleTileExit() {
    this.setState({
      projectHovered: null
    })
  }

  render() {
    return (
      <div id="PageHome">
        <CrossHairs
          tileHovered={this.state.projectHovered} >
            
          <div id="main_body">
            <div className="tiles">
              {
                this.state.projects.map((project) => (
                  <ProjectTile
                    key={project.id}
                    project={project}
                    match = {this.props.match}
                    handleTileEnter={this.handleTileEnter}
                    handleTileExit={this.handleTileExit} />
                ))
              }
            </div>
            <div id="preview-container">
              <PreviewPane
                github_url={this.state.github_url}
                project={this.state.projectHovered} />
            </div>
          </div>
        </CrossHairs>
        <ConnectFooter />
      </div>
    );
  }
}

export default PageHome;
