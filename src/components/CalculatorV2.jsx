import React, { Component } from 'react';
import CalcInput from './CalcInput';
import { scaleEnum } from '../config/config';

function formatPrice(price) {
  return price.toFixed(2);
}
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleUnitChnage = this.handleUnitChnage.bind(this);
    this.weight = {
      lb: 1 / 2.205, // centralize to kg
      kg: 1,
    };
    this.state = {
      scaleLeft: 'lb',
      scaleFrom: 'lb',
      scaleRight: 'kg',
      scaleTo: 'kg',
      price: 0,
    };
  }
  handleUnitChnage(scaleFrom, scaleTo, price) {
    this.setState({ scaleFrom, scaleTo, price });
  }
  render() {
    const scaleLeft = this.state.scaleLeft;
    const scaleFrom = this.state.scaleFrom;
    const scaleTo = this.state.scaleTo;
    const price = this.state.price; // bug here priceFrom always = price
    let priceLeft, priceRight;
    if (scaleLeft === scaleFrom) {
      priceLeft = price;
      priceRight = formatPrice(
        (price * this.weight[scaleFrom]) / this.weight[scaleTo]
      );
    } else {
      priceLeft = formatPrice(
        (price * this.weight[scaleFrom]) / this.weight[scaleTo]
      );
      priceRight = price;
    }
    return (
      <div className='grocery-row'>
        <p>Beef at Walmart</p>
        <div className='grocery-row-convert'>
          <CalcInput
            scaleFrom={scaleEnum.LB} // this value will be get from drop box to make it more generic
            scaleTo={scaleEnum.KG}
            price={priceLeft}
            onPriceChange={this.handleUnitChnage}
          />
          <i className='fas fa-arrows-alt-h fa-lg'></i>
          <CalcInput
            scaleFrom={scaleEnum.KG}
            scaleTo={scaleEnum.LB}
            price={priceRight}
            onPriceChange={this.handleUnitChnage}
          />
        </div>
      </div>
    );
  }
}
