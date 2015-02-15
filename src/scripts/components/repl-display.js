/** @jsx REACT.DOM */
const React = require('react');

const ReplDisplay = React.createClass({
  componentWillMount: function () {
    this.props.repl.on('UPDATE', this._onChange);
  },

  getLines: function () {
    return {lines: this.props.repl.getDisplay()};
  },

  getInitialState: function () {
    return this.getLines();
  },

  _onChange: function () {
    this.setState(this.getLines());
  },

  render: function () {
    const lines = this.state.lines.map((line, i) => {
      return <p key={i}>{line}</p>;
    });

    return (
      <div>
        {lines}
      </div>
    );
  }
});

module.exports = ReplDisplay;
