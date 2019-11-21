import React from 'react';

// import CrossHairs from '../CrossHairs/CrossHairs';
import PreviewPane from '../PreviewPane/PreviewPane';
import ProjectTile from '../ProjectTile/ProjectTile';

import projects from '../../data/projects.json';

import './PageHome.css';

const RES_DIR = 'resources/projects';

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


    window.onresize = (event) => {
      this.setState({
        windowWidth: window.innerWidth
      })
    };

    this.handleTileEnter = this.handleTileEnter.bind(this);
    this.handleTileExit = this.handleTileExit.bind(this);
  }

  componentDidMount() {

    document.title = `AG Portfolio - Home`;

    // Load Project data into state.
    this.setState({
      projects: projects,
      windowWidth: window.innerWidth
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

    var backgroundStyle = this.state.projectHovered
      ? { backgroundImage: `url(${this.state.github_url}/${RES_DIR}/${this.state.projectHovered.img})` }
      : {};

    var previewPane;
    var mobileBackground;

    if (this.state.windowWidth < 800) {
      previewPane = null;

      mobileBackground = <div id="mobile-image-background" style={backgroundStyle} />;
    } else {

      previewPane = <PreviewPane
        github_url={this.state.github_url}
        project={this.state.projectHovered} />;

      mobileBackground = null;

    }

    return (

      <div id="PageHome">
        {mobileBackground}

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
        <div id="preview-container">
          {previewPane}
        </div>
      </div>

    );
  }
}

export default PageHome;
