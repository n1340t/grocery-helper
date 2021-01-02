import React, { Component } from 'react';

export default class CalcItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='grocery-row-item'>
        <label>{this.props.name}</label>
        <input
          type='text'
          onChange={this.props.onChangeInputPrice}
          value={this.props.price} // Controlled Component the input value is driven by react state (props), it also mean dispalyed value is updated when setState set new state
          name={this.props.name}
        ></input>
      </div>
    );
  }
}
