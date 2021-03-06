import React from 'react';
import './ProjectTile.css';
import { Redirect } from 'react-router-dom';

export default class ProjectTile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boundingRect: null,
            redirect: false
        }

        this.animation = (props.animation === undefined ? true : this.animation);

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
        // this.setState({
        //     boundingRect: this.selector.current.getBoundingClientRect()
        // })
    }

    handleTileClick() {
        if (this.animation) {

            this.setState({
                redirect: true
            })
        }
    }

    render() {

        let project = this.props.project;
 
        if (this.state.redirect) {

            window.history.pushState({},'/');

            return (
                <Redirect to={{
                    pathname: `Projects/${project.id}`,
                }} />
            )
        } else {
            return (
                <div className={this.animation ? "tile" : "tile_noAnimation"}
               
                    onMouseOver={() => (this.props.handleTileEnter(project))}
                    onMouseLeave={() => (this.props.handleTileExit())}
                    
                    onTouchStart={() => (this.props.handleTileEnter(project))}

                    onMouseUp={() => this.handleTileClick(project)}
                    ref={this.selector}
                >
                    <div id="date">{project.date}</div>

                    <div id={this.animation ? "title" : "title_noAnimation"}>
                        {project.title}
                    </div>

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
