/** @jsx REACT.DOM */
const React = require('react');
const ReplDisplay = require('./repl-display');
const ReplInput = require('./repl-input');

const REPL = require('../models/repl');

const Repl = React.createClass({
  repl: new REPL(),

  getRepl: function () {
    return {repl: this.repl};
  },

  getInitialState: function () {
    return this.getRepl();
  },

  render: function () {
    return (
      <div className="repl">
        <ReplDisplay repl={this.repl} />
        <ReplInput repl={this.repl}/>
      </div>
    )
  }
});

module.exports = Repl;
