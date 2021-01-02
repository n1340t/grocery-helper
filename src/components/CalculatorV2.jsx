import React, { Component } from 'react';
import CalcInput from './CalcInput';
import { scaleEnum, weight, eqSides } from '../config/config';
import { debounce } from '../utils/helper';

function formatPrice(price) {
  return price.toFixed(2);
}
function convertPrice(side, scaleLeft, scaleRight, price) {
  let priceLeft, priceRight;
  if (side === eqSides.LEFT) {
    priceLeft = price;
    priceRight = formatPrice((price * weight[scaleRight]) / weight[scaleLeft]);
  } else {
    // swap value
    priceRight = price;
    priceLeft = formatPrice((price * weight[scaleRight]) / weight[scaleLeft]);
  }
  return { priceLeft, priceRight };
}
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleUnitChnage = debounce(this.handleUnitChnage, 100).bind(this);
    this.firstScale = Object.keys(scaleEnum)[0];
    this.state = {
      scaleLeft: this.firstScale, // initialize with first scale
      priceLeft: 0,
      scaleRight: scaleEnum.KG,
      priceRight: 0,
    };
  }
  handleScaleChange(side, changedScale) {
    if (side === eqSides.LEFT) {
      if (changedScale === this.state.scaleRight) {
        // swap scale
        const currentLeftScale = this.state.scaleLeft;
        const currentLeftPrice = this.state.priceLeft;
        const currentRightScale = this.state.scaleRight;
        const { priceLeft, priceRight } = convertPrice(
          side,
          currentRightScale,
          currentLeftScale,
          currentLeftPrice
        );
        this.setState({
          scaleLeft: scaleEnum[changedScale],
          priceLeft,
          scaleRight: currentLeftScale,
          priceRight,
        });
      }
    } else {
      if (changedScale === this.state.scaleLeft) {
        // swap scale
        const currentLeftScale = this.state.scaleLeft;
        const currentRightScale = this.state.scaleRight;
        const currentRightPrice = this.state.priceRight;
        const { priceLeft, priceRight } = convertPrice(
          side,
          currentLeftScale,
          currentRightScale,
          currentRightPrice
        );
        this.setState({
          scaleLeft: currentRightScale,
          priceLeft,
          scaleRight: scaleEnum[changedScale],
          priceRight,
        });
      }
    }
  }
  handleUnitChnage(side, price) {
    const scaleRight = this.state.scaleRight;
    const scaleLeft = this.state.scaleLeft;
    const { priceLeft, priceRight } = convertPrice(
      side,
      scaleLeft,
      scaleRight,
      price
    );
    this.setState({ priceLeft, priceRight });
  }
  render() {
    const scaleLeft = this.state.scaleLeft;
    const scaleRight = this.state.scaleRight;
    let priceLeft = this.state.priceLeft;
    let priceRight = this.state.priceRight;

    return (
      <div className='grocery-row'>
        <p>Beef at Walmart</p>
        <div className='grocery-row-convert'>
          <CalcInput
            scale={scaleLeft}
            price={priceLeft}
            side={eqSides.LEFT}
            onSelectChange={this.handleScaleChange}
            onPriceChange={this.handleUnitChnage}
          />
          <i className='fas fa-arrows-alt-h fa-lg'></i>
          <CalcInput
            scale={scaleRight}
            price={priceRight}
            side={eqSides.RIGHT}
            onSelectChange={this.handleScaleChange}
            onPriceChange={this.handleUnitChnage}
          />
        </div>
      </div>
    );
  }
}
