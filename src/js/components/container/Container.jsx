import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";

const API_KEY = '5db5d10ef6b6cae299cd46fdf50de74f';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dollar: '',
          euro: ''
        }
    }

    getExchangeRates = async e => {
      const call = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
      const data = await call.json();
      // console.log(data);
      if(data){
      this.setState({
        dollar: data.rates.USD,
        euro: data.rates.EUR
      });
}
    }

    componentDidMount () {
      this.getExchangeRates();
    }

    render() {
      // console.log(this.state)
      if(!this.state.euro || !this.state.dollar) {
        return null;
      }
      let dollar = this.state.dollar;
      let euro = this.state.euro;
        return (
          <main>
            <h1>Convert Away</h1>
            <Converter
              dollar={dollar}
              euro={euro}
            />

          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
