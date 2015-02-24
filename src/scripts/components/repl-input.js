/** @jsx REACT.DOM */
import React from 'react';

const keys = {
  enter: 13,
  up: 38
};

const ReplInput = React.createClass({
  getInitialState() {
    return {value: ''};
  },

  setValue(value) {
    this.setState({value: value});
  },

  handlePress(event) {
    if (event.which === keys.enter) {
      this.props.repl.enter(this.state.value);
      this.setValue('');
    }
  },

  handleDown(event) {
    if (event.which === keys.up) {
      let inputs = this.props.repl.getPastInputs();
      if (inputs.length) {
        this.setValue(inputs[inputs.length - 1]);
      }
    }
  },

  handleChange(event) {
    this.setValue(event.target.value);
  },

  render() {
    return (
      <div className="line">
        <span className="prompt">{this.props.repl.prompt}</span>
        <input type="text"
               autoFocus
               value={this.state.value}
               onKeyPress={this.handlePress}
               onChange={this.handleChange}
               onKeyDown={this.handleDown} />
      </div>
    );
  }
});

module.exports = ReplInput;
