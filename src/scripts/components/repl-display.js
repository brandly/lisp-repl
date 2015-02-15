/** @jsx REACT.DOM */
const React = require('react');

const ReplDisplay = React.createClass({
  componentWillMount: function () {
    this.props.repl.on('UPDATE', this._onChange);
  },

  getHistory: function () {
    return {history: this.props.repl.getHistory()};
  },

  getInitialState: function () {
    return this.getHistory();
  },

  _onChange: function () {
    this.setState(this.getHistory());
  },

  render: function () {
    const lines = this.state.history.map((item, i) => {
      const prefix = (item.type === 'input') ? this.props.repl.prompt : '';
      return <p className="line" key={i}><span className="prompt">{prefix}</span>{item.value}</p>;
    });

    return (
      <div>
        {lines}
      </div>
    );
  }
});

module.exports = ReplDisplay;
