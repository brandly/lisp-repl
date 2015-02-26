/** @jsx REACT.DOM */
import React from 'react';
import { addons } from 'react/addons';
import Repl from './repl';

const app = React.createClass({
  mixins: [addons.PureRenderMixin],

  render() {
    return (
      <div>
        <Repl />
      </div>
    );
  }
});

module.exports = app;
