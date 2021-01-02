import React, { Component } from 'react';
import CalcItem from './CalcItem';
import { debounce } from '../utils/helper';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.constLbAndKg = 2.205;
    this.state = {
      price: {
        lb: 1,
        kg: 1 * this.constLbAndKg,
      },
    };
    this.debouncedFn = this.debouncedFn.bind(this);
    this.onChangeInputPrice = debounce(this.onChangeInputPrice, 100);
  }
  debouncedFn(e) {
    const name = e.target.name;
    const price = e.target.value;
    this.onChangeInputPrice(name, price);
  }
  onChangeInputPrice(name, price) {
    if (name === '$ per lb') {
      //set new state of state price lb
      this.setState({
        price: {
          lb: price,
          kg: this.convertPrice(name, price),
        },
      });
    } else if (name === '$ per kg') {
      this.setState({
        price: {
          lb: this.convertPrice(name, price),
          kg: price,
        },
      });
    }
  }
  convertPrice(name, price) {
    if (name === '$ per lb') {
      return (price * this.constLbAndKg).toPrecision(3);
    }
    return (price / this.constLbAndKg).toPrecision(3);
  }
  render() {
    return (
      <div className='grocery-row'>
        <p>Beef at Walmart</p>
        <div className='grocery-row-convert'>
          <CalcItem
            name='$ per lb'
            price={this.state.price.lb}
            onChangeInputPrice={this.debouncedFn}
          />
          <i className='fas fa-arrows-alt-h fa-lg'></i>
          <CalcItem
            name='$ per kg'
            price={this.state.price.kg}
            onChangeInputPrice={this.debouncedFn}
          />
        </div>
      </div>
    );
  }
}
