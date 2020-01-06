import React from "react";

class Preview extends React.Component {
    render() {
        return (
            <div className="preview">
                <p>PREVIEW</p>
                <img
                    src={this.props.data.selected}
                    alt={this.props.data.title}
                    title={this.props.data.title}
                ></img>
            </div>
        );
    }
}

export default Preview;
