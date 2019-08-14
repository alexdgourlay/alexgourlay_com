import React from 'react';
import './ProjectTile.css';
import { Link } from 'react-router-dom';

export default class ProjectTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boundingRect: null
        }

        // Reference for finding bounding box.
        this.selector = React.createRef();

        // BINDINGS
        this.setBoundingRect = this.setBoundingRect.bind(this);
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

    render() {
        let project = this.props.project;
        let titleNoSpaces = project.title.replace(/\s/g, '');

        // console.log(`${this.props.match.url}/Projects/${titleNoSpaces}`);

        return (
            <div className="tile"
                onMouseEnter={() => (this.props.handleTileEnter(project))}
                onMouseLeave={() => (this.props.handleTileExit())}

                ref={this.selector}
            >
                <div id="date">{project.date}</div>
                <Link to={`${this.props.match.url}Projects/${titleNoSpaces}`} >
                    <div id="title">{project.title}</div>
                </Link>

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

