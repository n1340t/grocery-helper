import React, { Component } from 'react';
import { scaleEnum, scaleNames } from '../config/config.js';

export default class CalcInput extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSelectChange(e) {
    this.props.onSelectChange(this.props.side, e.target.value);
  }
  handleInputChange(e) {
    this.props.onPriceChange(this.props.side, e.target.value);
  }

  render() {
    const price = this.props.price;
    const scale = this.props.scale;
    const options = Object.entries(scaleEnum).map((opt) => (
      <option key={opt[0]} value={opt[0]}>
        {opt[1]}
      </option>
    ));
    return (
      <div className='grocery-row-item'>
        <label>{scaleNames[scale]}</label>
        <select value={scale} onChange={this.handleSelectChange}>
          {options}
        </select>
        <input
          type='text'
          onChange={this.handleInputChange}
          value={price} // Controlled Component the input value is driven by react state (props), it also mean dispalyed value is updated when setState set new state
          name={scaleNames[scale]}
        ></input>
      </div>
    );
  }
}
