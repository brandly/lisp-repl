const EventEmitter = require('events').EventEmitter;
const Lisp = require('brandly-lisp');

module.exports = class REPL extends EventEmitter {
  constructor() {
    this.lisp = new Lisp();
    this.prompt = '>> ';
    this.history = [];
  }

  enter(value) {
    this.recordInput(value);

    if (value.trim().length) {
      try {
        const result = this.lisp.exec(value);
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
      value: value
    });
  }

  getHistory() {
    return this.history;
  }

  getPastInputs() {
    return this.history.filter(h => h.type === 'input').map(h => h.value);
  }
};
