/** @jsx REACT.DOM */
import React from 'react';
import Repl from './repl';

const app = React.createClass({
  render() {
    return (
      <div>
        <Repl />
      </div>
    );
  }
});

module.exports = app;
