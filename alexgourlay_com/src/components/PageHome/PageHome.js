import React from 'react';

import CrossHairs from '../CrossHairs/CrossHairs';
import PreviewPane from '../PreviewPane/PreviewPane';
import ProjectTile from '../ProjectTile/ProjectTile';

import P5Wrapper from 'react-p5-wrapper';
import {sketch} from '../../p5Sketch';

import projects from '../../data/projects.json';

import './PageHome.css';

class PageHome extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      github_url: 'https://raw.githubusercontent.com/alexdgourlay/alexgourlay.com/master/alexgourlay_com',
      projects: [],
      projectHovered: null,
      isMobile: false,
    }

    // device detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.setState({ isMobile: true });
    }

    this.handleTileEnter = this.handleTileEnter.bind(this);
    this.handleTileExit = this.handleTileExit.bind(this);
  }

  componentDidMount() {

    document.title = `AG Portfolio - Home`;

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

    var canvas = this.state.isMobile ? <div /> : <P5Wrapper sketch={sketch} />;

    return (
      <div>
        <div id="canvas">
          {/* {canvas} */}
        </div>
        <div id="PageHome">
          <CrossHairs
            tileHovered={this.state.projectHovered} >

            <div id="main_body">
              <div className="tileGrid">
                {
                  this.state.projects.map((project) => (
                    <div className="tileGridElement" key={project.id}>
                      <ProjectTile
                        key={project.id}
                        project={project}
                        match={this.props.match}
                        handleTileEnter={this.handleTileEnter}
                        handleTileExit={this.handleTileExit} />
                    </div>
                  ))
                }
              </div>

              <PreviewPane
                github_url={this.state.github_url}
                project={this.state.projectHovered} />

            </div>
          </CrossHairs>

        </div>
      </div>
    );
  }
}

export default PageHome;
