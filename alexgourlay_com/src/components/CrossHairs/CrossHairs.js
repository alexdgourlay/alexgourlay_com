import React from 'react';

export default class CrossHairs extends React.Component {

    constructor(props) {
        super(props);

        this.svgWidth = 20;
        this.svgHeight = 20;

        this.state = {
            xPos: 0,
            yPos: 0,
            xOffset: -this.svgWidth / 2,
            yOffset: -this.svgHeight / 2,
            mouseOnScreen: false
        }
    }

    handleMouseMove(e) {
        this.setState({
            xPos: e.clientX,
            yPos: e.clientY,
            svgWidth: this.svgWidth,
            svgHeight: this.svgWidth
        });
    }


    render() {

        let rect = this.props.hoveredRect;

        return (
            <div
                onMouseMove={this.handleMouseMove.bind(this)}
                onMouseEnter={() => this.setState({ mouseOnScreen: true })}
                onMouseLeave={() => this.setState({ mouseOnScreen: false })}
            >
                {this.props.children}

                {/* Check whether mouse is on screen. */}
                {this.state.mouseOnScreen ?
                    // Check if tile is being hovered over
                    this.props.tileHovered >= 0 ?
                        // IF NOT HOVERED OVER
                        <svg height={this.svgWidth} width={this.svgHeight} style={{
                            position: 'fixed',
                            left: this.state.xPos + this.state.xOffset,
                            top: this.state.yPos + this.state.yOffset,
                            zIndex: -99
                        }}>
                            <CrossHairSVG
                                stroke="black"
                                strokeWidth="0.3"
                                sep={3}
                                svgWidth={this.svgWidth}
                                svgHeight={this.svgHeight} />
                        </svg>
                        :
                        // IF HOVERED OVER
                        <svg height={rect.height} width={rect.width} style={{
                            position: 'fixed',
                            left: rect.left,
                            top: rect.top,
                            zIndex: 99
                        }}>
                            <CrossHairSVG
                                stroke="black"
                                strokeWidth="5"
                                sep={3}
                                svgWidth={rect.width}
                                svgHeight={rect.height} />
                        </svg>

                    : <div />
                }
            </div>
        );
    }
}

const CrossHairSVG = (props) => (
    <g>
        <path id="lineAB" d={idleLine(0, props.sep, props.svgWidth, props.svgHeight)} stroke={props.stroke}
            strokeWidth={props.strokeWidth} fill="none" />
        <path id="lineAB" d={idleLine(1, props.sep, props.svgWidth, props.svgHeight)} stroke={props.stroke}
            strokeWidth={props.strokeWidth} fill="none" />
        <path id="lineAB" d={idleLine(2, props.sep, props.svgWidth, props.svgHeight)} stroke={props.stroke}
            strokeWidth={props.strokeWidth} fill="none" />
        <path id="lineAB" d={idleLine(3, props.sep, props.svgWidth, props.svgHeight)} stroke={props.stroke}
            strokeWidth={props.strokeWidth} fill="none" />

    </g>
)

function idleLine(index, sep, svgWidth, svgHeight) {
    let halfH = svgHeight / 2;
    let halfW = svgWidth / 2;

    switch (index) {
        case 0:
            return `M ${svgWidth} ${halfH - sep} L ${halfW + sep} ${halfH - sep} L ${halfW + sep} 0`;
        case 1:
            return `M ${svgWidth} ${halfH + sep} L ${halfW + sep} ${halfH + sep} L ${halfW + sep} ${svgHeight}`;
        case 2:
            return `M 0 ${halfH + sep} L ${halfW - sep} ${halfH + sep} L ${halfW - sep} ${svgHeight}`;
        case 3:
            return `M 0 ${halfH - sep} L ${halfW - sep} ${halfH - sep} L ${halfW - sep} 0`;
        default:
            return '';
    }
}