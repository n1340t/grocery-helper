import React, { Component } from 'react';
import { scaleNames } from '../config/config.js';

export default class CalcInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onPriceChange(e.target.value);
  }

  render() {
    const price = this.props.price;
    const scale = this.props.scale;
    return (
      <div className='grocery-row-item'>
        <label>{scaleNames[scale]}</label>
        <input
          type='text'
          onChange={this.handleChange}
          value={price} // Controlled Component the input value is driven by react state (props), it also mean dispalyed value is updated when setState set new state
          name={scaleNames[scale]}
        ></input>
      </div>
    );
  }
}
