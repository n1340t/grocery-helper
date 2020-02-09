import React, { Component } from 'react';
import Convert from './components/Convert';

export default class GroceryHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h2>Grocery Helper</h2>
        <Convert />
      </React.Fragment>
    );
  }
}
