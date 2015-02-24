/** @jsx REACT.DOM */
import React from 'react';

const ReplDisplay = React.createClass({
  componentWillMount() {
    this.props.repl.on('UPDATE', this._onChange);
  },

  getHistory() {
    return {history: this.props.repl.getHistory()};
  },

  getInitialState() {
    return this.getHistory();
  },

  _onChange() {
    this.setState(this.getHistory());
  },

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  },

  componentDidUpdate() {
    this.scrollToBottom();
  },

  render() {
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
