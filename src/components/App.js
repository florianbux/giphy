import React from "react";
import "../scss/App.scss";
import data from "../data/giphy";
import Preview from "./Preview";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: data[0].images.original.url,
            title: data[0].title
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            selected: e.currentTarget.children[0].src,
            title: e.currentTarget.children[0].alt
        });
    }

    render() {
        const listItems = data.map(el => {
            return (
                <div
                    className="gif-container"
                    key={el.id}
                    onClick={this.handleChange}
                >
                    <img
                        src={el.images.original.url}
                        alt={el.title}
                        title={el.title}
                    ></img>
                </div>
            );
        });
        return (
            <div className="app">
                <div className="gallery">{listItems}</div>
                <Preview data={this.state}></Preview>
            </div>
        );
    }
}

export default App;
