const fizzBuzz = require("../problems/5-fizzBuzz.js")

describe('fizzBuzz', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should print numbers from 1 to 100', () => {
    fizzBuzz();
    for (let i = 1; i <= 100; i++) {
      expect(consoleSpy).toHaveBeenCalledWith(i);
    }
  });

  it('should print "Fizz" for multiples of 3', () => {
    fizzBuzz();
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        expect(consoleSpy).toHaveBeenCalledWith('Fizz');
      }
    }
  });

  it('should print "Buzz" for multiples of 5', () => {
    fizzBuzz();
    for (let i = 1; i <= 100; i++) {
      if (i % 3 !== 0 && i % 5 === 0) {
        expect(consoleSpy).toHaveBeenCalledWith('Buzz');
      }
    }
  });

  it('should print "FizzBuzz" for multiples of 3 and 5', () => {
    fizzBuzz();
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        expect(consoleSpy).toHaveBeenCalledWith('FizzBuzz');
      }
    }
  });
});


