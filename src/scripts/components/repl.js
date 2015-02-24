/** @jsx REACT.DOM */
import React from 'react';
import ReplDisplay from './repl-display';
import ReplInput from './repl-input';
import REPL from '../models/repl';

const Repl = React.createClass({
  repl: new REPL(),

  getRepl() {
    return {repl: this.repl};
  },

  getInitialState() {
    return this.getRepl();
  },

  render() {
    return (
      <div className="repl">
        <ReplDisplay repl={this.repl} />
        <ReplInput repl={this.repl}/>
      </div>
    );
  }
});

module.exports = Repl;
