/** @jsx REACT.DOM */
const React = require('react');

const keys = {
  enter: 13
};

const ReplInput = React.createClass({
  getInitialState: function () {
    return {value: ''}
  },

  setValue: function (value) {
    this.setState({value: value});
  },

  handleSubmit: function (event) {
    if (event.which === keys.enter) {
      this.props.repl.enter(this.state.value);
      this.setValue('');
    }
  },

  handleChange: function(event) {
    this.setValue(event.target.value);
  },

  render: function () {
    return (
      <div>
        <span>{this.props.repl.prompt}</span>
        <input type="text" value={this.state.value} onKeyPress={this.handleSubmit} onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = ReplInput;
