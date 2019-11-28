import React, { Component } from 'react';

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      euroToDollar: 1*this.props.dollar,
      dollarToEuro: 1*(this.props.euro/this.props.dollar),
      swapConverter: false
    }
  }

  convert = (n) => {
    const input = n.target.value;
    const euroToDollar = input*this.props.dollar;
    const dollarToEuro = input*(this.props.euro/this.props.dollar);
    // console.log(convert)
    this.setState({
      euroToDollar: euroToDollar,
      dollarToEuro: dollarToEuro
    });
    
  }

  swapConversions = () => {
    const swapConverter = this.state.swapConverter;
    this.setState({
      swapConverter: swapConverter ? false : true
    })
  }

render() {
  // console.log(this.state.convert);
  const euroToDollar = Math.round(this.state.euroToDollar*100) / 100;
  const dollarToEuro = Math.round(this.state.dollarToEuro*100) / 100;
  const swapConverter = this.state.swapConverter;
  
  if(!this.props.euro || !this.props.dollar) {
    return null;
  }
  // console.log(this.props)
  
    return (
      !swapConverter ? (
      <div className="converter">
        <p className="input"><span>€</span><input type="text" onChange={this.convert} placeholder={this.props.euro}/></p>
        <p className="converted"><span>$</span>{euroToDollar.toFixed(2)}</p>
        <button onClick={this.convert}>Have at it </button>
        <p onClick={this.swapConversions}>€>$</p>
      </div>
      ) : (
        <div className="converter">
        <p className="input"><span>$</span><input type="text" onChange={this.convert} placeholder="1"/></p>
        <p className="converted"><span>€</span>{dollarToEuro.toFixed(2)}</p>
        <button onClick={this.convert}>Have at it </button>
        <p onClick={this.swapConversions}>$>€</p>
      </div>
      )

    );
  }
}