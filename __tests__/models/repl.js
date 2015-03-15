jest.dontMock('../../src/scripts/models/repl');
jest.dontMock('immutable');

import REPL from '../../src/scripts/models/repl';

describe('REPL', function () {
  let repl;

  beforeEach(function () {
    repl = new REPL();
  });

  it('should give you past inputs', function () {
    repl.enter('1');
    repl.enter('2');

    expect(repl.getPastInputs().size).toEqual(2);
  });

  it('should scroll thru past inputs', function () {
    repl.enter('1');
    repl.enter('2');

    expect(repl.getPreviousInput()).toEqual('2');
    expect(repl.getPreviousInput()).toEqual('1');
    expect(repl.getPreviousInput()).toEqual('1');

    expect(repl.getNextInput()).toEqual('2');
    expect(repl.getNextInput()).toEqual('');
  });

  it('should format lists nicely', function () {
    let result = repl.formatOutput([1, 2, 3]);

    expect(result).toEqual('(list 1 2 3)');
  });
});
