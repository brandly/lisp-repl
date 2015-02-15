/** @jsx REACT.DOM */
const React = require('react');

const keys = {
  enter: 13,
  up: 38
};

const ReplInput = React.createClass({
  getInitialState: function () {
    return {value: ''}
  },

  setValue: function (value) {
    this.setState({value: value});
  },

  handlePress: function (event) {
    if (event.which === keys.enter) {
      this.props.repl.enter(this.state.value);
      this.setValue('');
    }
  },

  handleDown: function (event) {
    if (event.which === keys.up) {
      let inputs = this.props.repl.getPastInputs();
      if (inputs.length) {
        this.setValue(inputs[inputs.length - 1]);
      }
    }
  },

  handleChange: function(event) {
    this.setValue(event.target.value);
  },

  render: function () {
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
