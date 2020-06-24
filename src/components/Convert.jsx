import React, { Component } from 'react';
import ConvertItem from './ConvertItem';

export default class GroceryHelper extends Component {
  constructor(props) {
    super(props);
    this.constLbAndKg = 2.205;
    this.debounceTimeout = null;
    this.state = {
      price: {
        lb: 1,
        kg: 1 * this.constLbAndKg
      }
    };
    this.onChangeInputPrice = this.onChangeInputPrice.bind(this);
  }
  convertPrice(name, price) {
    if (name === '$ per lb') {
      return (price * this.constLbAndKg).toPrecision(3);
    }
    return (price / this.constLbAndKg).toPrecision(3);
  }
  // apply debounce technique
  onChangeInputPrice(e) {
    const name = e.target.name;
    const price = e.target.value;
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      if (name === '$ per lb') {
        //set new state of state price lb
        this.setState({
          price: {
            lb: price,
            kg: this.convertPrice(name, price)
          }
        });
      } else if (name === '$ per kg') {
        this.setState({
          price: {
            lb: this.convertPrice(name, price),
            kg: price
          }
        });
      }
    }, 100);
  }
  render() {
    return (
      <div className='grocery-row'>
        <ConvertItem
          name='$ per lb'
          price={this.state.price.lb}
          onChangeInputPrice={this.onChangeInputPrice}
        />
        <i className="fas fa-arrows-alt-h fa-lg"></i>
        <ConvertItem
          name='$ per kg'
          price={this.state.price.kg}
          onChangeInputPrice={this.onChangeInputPrice}
        />
      </div>
    );
  }
}
