import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";

const API_KEY = '5db5d10ef6b6cae299cd46fdf50de74f';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // convert: Math.floor((32-32)*(5/9))
        }
    }

    getExchangeRates = async e => {
      const call = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
      const data = await call.json();
      console.log(data);

    }

    componentDidMount () {
      this.getExchangeRates();
    }

    render() {
        return (
          <main>
            <h1>Convert Away</h1>
            <Converter

            />

          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
