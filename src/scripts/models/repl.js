import { EventEmitter } from 'events';
import Lisp from 'brandly-lisp';

module.exports = class REPL extends EventEmitter {
  constructor() {
    this.lisp = new Lisp();
    this.prompt = '>> ';
    this.history = [];
  }

  getHistory() {
    return this.history;
  }

  getPastInputs() {
    return this.history.filter(h => h.type === 'input').map(h => h.value);
  }

  enter(input) {
    this.recordInput(input);

    if (input.trim().length) {
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
    this.history.push({
      type: 'input',
      value: value
    });
  }

  recordOutput(value) {
    this.history.push({
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
