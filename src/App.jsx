import React, { Component } from 'react';
import './style/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ConvertRow from './components/ConvertRow';

export default class GroceryHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h2>Grocery Helper</h2>
        <ConvertRow />
        <ConvertRow />
      </React.Fragment>
    );
  }
}
