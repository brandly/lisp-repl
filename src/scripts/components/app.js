/** @jsx REACT.DOM */
var React = require('react');
var Repl = require('./repl');

var app = React.createClass({
  render: function () {
    return (
      <div>
        <Repl />
      </div>
    )
  }
});

module.exports = app;
