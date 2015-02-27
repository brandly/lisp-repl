import { EventEmitter } from 'events';
import Lisp from 'brandly-lisp';
import Immutable from 'immutable';

module.exports = class REPL extends EventEmitter {
  constructor() {
    this.lisp = new Lisp();
    this.prompt = '>> ';

    this.history = Immutable.List();
    this.inputIndex = 0;
  }

  getHistory() {
    return this.history;
  }

  getPastInputs() {
    return this.history
               .filter(h => h.type === 'input' && h.value)
               .map(h => h.value);
  }

  getPreviousInput() {
    this.inputIndex = Math.max(this.inputIndex - 1, 0);
    return this.getInputAtIndex();
  }

  getNextInput() {
    this.inputIndex = Math.min(this.inputIndex + 1, this.getPastInputs().size);
    return this.getInputAtIndex();
  }

  getInputAtIndex() {
    return this.getPastInputs().get(this.inputIndex) || '';
  }

  enter(input) {
    input = input.trim();
    this.recordInput(input);

    if (input.length) {
      try {
        const result = this.lisp.exec(input);
        if (result) {
          this.recordOutput(result);
        }
      } catch (e) {
        this.recordOutput(e.toString());
      }
    }

    this.emit('UPDATE');
  }

  recordInput(value) {
    this.history = this.history.push({
      type: 'input',
      value: value
    });
    this.inputIndex = this.getPastInputs().size;
  }

  recordOutput(value) {
    this.history = this.history.push({
      type: 'output',
      value: this.formatOutput(value)
    });
  }

  formatOutput(value) {
    if (value instanceof Array) {
      return `(list ${value.join(' ')})`;
    } else {
      return value;
    }
  }
};
