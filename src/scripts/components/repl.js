/** @jsx REACT.DOM */
var React = require('react');
var ReplDisplay = require('./repl-display');
var ReplInput = require('./repl-input');

var REPL = require('../models/repl');

var Repl = React.createClass({
  repl: new REPL(),

  getRepl: function () {
    return {repl: this.repl};
  },

  getInitialState: function () {
    return this.getRepl();
  },

  render: function () {
    return (
      <div>
        <ReplDisplay repl={this.repl} />
        <ReplInput repl={this.repl}/>
      </div>
    )
  }
});

module.exports = Repl;
