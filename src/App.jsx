import React, { Component } from 'react';
import './style/main.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorV2 from './components/CalculatorV2';

export default class GroceryHelper extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;

    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
    this.addNewCalculator = this.addNewCalculator.bind(this);
    this.state = {
      calculator: [],
    };
  }

  addNewCalculator(e) {
    e.preventDefault();
    const calc = {
      name: this.textInput.value,
      key: Date.now(),
    };
    this.setState((prevState) => {
      return {
        calculator: prevState.calculator.concat(calc),
      };
    });
    this.textInput.value = '';
  }
  render() {
    const calculators = this.state.calculator.map((calc) => {
      return <CalculatorV2 key={calc.key} title={calc.name} />;
    });
    return (
      <React.Fragment>
        <h2>Grocery Helper</h2>
        <form onSubmit={this.addNewCalculator}>
          <input
            placeholder="Enter item's name"
            ref={this.setTextInputRef}
          ></input>
          <button type='submit'>Add</button>
          {calculators}
        </form>
      </React.Fragment>
    );
  }
}
