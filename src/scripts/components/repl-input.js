/** @jsx REACT.DOM */
import React from 'react';
import { addons } from 'react/addons';

const keys = {
  enter: 13,
  up: 38
};

const ReplInput = React.createClass({
  mixins: [addons.PureRenderMixin],

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
      if (inputs.size) {
        this.setValue(inputs.get(inputs.size - 1));

        setTimeout(() => {
          this.moveCaretToEndOfInput();
        });
      }
    }
  },

  handleChange(event) {
    this.setValue(event.target.value);
  },

  moveCaretToEndOfInput() {
    const el = this.refs.theInput.getDOMNode();
    el.selectionStart = el.selectionEnd = this.state.value.length;
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
               onKeyDown={this.handleDown}
               ref="theInput" />
      </div>
    );
  }
});

module.exports = ReplInput;
