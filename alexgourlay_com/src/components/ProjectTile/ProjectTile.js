import React from 'react';
import './ProjectTile.css';
import { Link, Redirect } from 'react-router-dom';

export default class ProjectTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boundingRect: null,
            redirect: false
        }

        // Reference for finding bounding box.
        this.selector = React.createRef();

        // BINDINGS
        this.setBoundingRect = this.setBoundingRect.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
    }

    componentDidMount = () => {
        this.setBoundingRect();

        window.addEventListener("resize", () => this.setBoundingRect());
    };

    setBoundingRect() {
        this.setState({
            boundingRect: this.selector.current.getBoundingClientRect()
        })
    }

    handleTileClick() {
        this.setState({
            redirect: true
        })
    }

    render() {
        let project = this.props.project;
        let titleNoSpaces = project.title.replace(/\s/g, '');

        if (this.state.redirect) {
            return (
                <Redirect push to={`${this.props.match.url}Projects/${titleNoSpaces}`} />
            )
        } else {
            return (
                <div className="tile"
                    onMouseEnter={() => (this.props.handleTileEnter(project))}
                    onMouseLeave={() => (this.props.handleTileExit())}
                    onClick={() => this.handleTileClick(project)}
                    ref={this.selector}
                >
                    <div id="date">{project.date}</div>
                    {/* <Link to={`${this.props.match.url}Projects/${titleNoSpaces}`} >
                    </Link> */}
                    <div id="title">{project.title}</div>

                    {project.tags.map((tag, index) => (
                        <p className="tag" key={index}>
                            {index === project.tags.length - 1 ?
                                `${tag}`.toLowerCase()
                                : `${tag}, `.toLowerCase()}
                        </p>
                    ))}
                </div>
            );
        }
    }
}
