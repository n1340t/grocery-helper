import React, { Component } from 'react';
import CalcInput from './CalcInput';

const constLbAndKg = 2.205;
function toKilogram(priceInPound) {
  return priceInPound * constLbAndKg;
}
function toPound(priceInKg) {
  return priceInKg / constLbAndKg;
}
function tryConvert(price, convert) {
  const input = parseFloat(price);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const fixed = output.toFixed(3);
  return fixed.toString();
}
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handlePoundChange = this.handlePoundChange.bind(this);
    this.handleKilogramChange = this.handleKilogramChange.bind(this);
    this.state = { price: '', scale: 'lb' };
  }
  handlePoundChange(price) {
    this.setState({ scale: 'lb', price });
  }

  handleKilogramChange(price) {
    this.setState({ scale: 'kg', price });
  }
  render() {
    const scale = this.state.scale;
    const price = this.state.price;
    const pricePerLb = scale === 'kg' ? tryConvert(price, toKilogram) : price;
    const pricePerKg = scale === 'lb' ? tryConvert(price, toPound) : price;
    return (
      <div className='grocery-row'>
        <p>Beef at Walmart</p>
        <div className='grocery-row-convert'>
          <CalcInput
            scale='lb'
            price={pricePerLb}
            onPriceChange={this.handlePoundChange}
          />
          <i className='fas fa-arrows-alt-h fa-lg'></i>
          <CalcInput
            scale='kg'
            price={pricePerKg}
            onPriceChange={this.handleKilogramChange}
          />
        </div>
      </div>
    );
  }
}
