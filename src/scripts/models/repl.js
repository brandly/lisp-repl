const EventEmitter = require('events').EventEmitter;
const Lisp = require('brandly-lisp');
const pack = require('../../../package.json');

module.exports = class REPL extends EventEmitter {
  constructor() {
    this.lisp = new Lisp();
    this.prompt = '>> ';
    this.display = [];
  }

  enter(value) {
    this.display.push(this.prompt + value);

    if (value.trim().length) {
      try {
        const result = this.lisp.exec(value);
        if (result) {
          this.display.push(result);
        }
      } catch (e) {
        this.display.push(e.toString());
      }
    }

    this.emit('UPDATE');
  }

  getDisplay() {
    return this.display;
  }
};
