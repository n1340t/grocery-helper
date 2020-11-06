import React, { Component } from 'react';
import './style/main.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorV2 from './components/CalculatorV2';

export default class GroceryHelper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Grocery Helper</h2>
        <CalculatorV2 />
      </React.Fragment>
    );
  }
}
