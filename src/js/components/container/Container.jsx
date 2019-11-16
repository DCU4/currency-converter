import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // convert: Math.floor((32-32)*(5/9))
        }
    }



    render() {
        return (
          <main>
            <h1>Convert Away!</h1>
            <Converter

            />

          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
