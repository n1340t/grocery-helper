import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let contentNode = document.getElementById('content');
if (!contentNode) {
  contentNode = document.createElement('div');
  contentNode.id = 'content';
}
document.body.appendChild(contentNode);
ReactDOM.render(<App />, contentNode);
// Native Module hot accept api not work
if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    console.log('Accepting change from App.jsx');
    ReactDOM.unmountComponentAtNode(contentNode);
    ReactDOM.render(<App />, contentNode);
  });
}
