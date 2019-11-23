import React, { Component } from 'react';

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convert: 1*this.props.dollar
      
    }
  }

  convert = (n) => {
    const input = n.target.value;
    const convert = input*this.props.dollar;
    // console.log(convert)
    this.setState({
      convert: convert
    });
    
  }

render() {
  // console.log(this.state.convert);
  const convert = Math.round(this.state.convert*100) / 100;
  
  if(this.props){
    console.log(convert)
  }
  // console.log(this.props)

    return (
      <div className="converter">
        <span>$</span><input type="text" onChange={this.convert} placeholder="1"/>
        <p className="converted"><span>€</span>{convert.toFixed(2)}</p>
        <button onClick={this.convert}>Have at it </button>
      </div>

    );
  }
}