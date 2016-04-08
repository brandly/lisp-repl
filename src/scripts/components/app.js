/** @jsx REACT.DOM */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Repl from './repl';

const app = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return (
      <div>
        <Repl />
      </div>
    );
  }
});

module.exports = app;
