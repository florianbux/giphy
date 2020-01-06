import React from "react";

class Preview extends React.Component {
    render() {
        return (
            <div className="preview">
                <p>PREVIEW</p>
                <img src={this.props.data} alt="whatever"></img>
            </div>
        );
    }
}

export default Preview;
