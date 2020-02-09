import React, { Component } from 'react';
import '../style/main.css';

export default class ConvertItem extends Component {
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
          value={this.props.price}
          name={this.props.name}
        ></input>
      </div>
    );
  }
}
