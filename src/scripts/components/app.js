/** @jsx REACT.DOM */
const React = require('react');
const Repl = require('./repl');

const app = React.createClass({
  render: function () {
    return (
      <div>
        <Repl />
      </div>
    )
  }
});

module.exports = app;
