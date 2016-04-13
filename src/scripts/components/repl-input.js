import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { findDOMNode } from 'react-dom';

const keys = {
  enter: 13,
  up: 38,
  down: 40
};

const ReplInput = React.createClass({
  mixins: [PureRenderMixin],

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
      this.setValue(this.props.repl.getPreviousInput());
      this.moveCaretToEndOfInput();

    } else if (event.which === keys.down) {
      this.setValue(this.props.repl.getNextInput());
      this.moveCaretToEndOfInput();
    }
  },

  handleChange(event) {
    this.setValue(event.target.value);
  },

  moveCaretToEndOfInput() {
    const el = findDOMNode(this.refs.theInput);
    setTimeout(() => {
      el.selectionStart = el.selectionEnd = this.state.value.length;
    });
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
