import INFINITY from 'src/infinity-x';

const mathematicalInfinity = 1 / 0;

describe('iNFINITY', function() {
  it('is a number', function() {
    expect.assertions(1);
    expect(typeof INFINITY).toBe('number');
  });

  it('should be the same as the global Infinity', function() {
    expect.assertions(1);
    expect(INFINITY).toBe(mathematicalInfinity);
  });

  it('when negated should be the same as the global negated Infinity', function() {
    expect.assertions(1);
    expect(-INFINITY).toBe(-mathematicalInfinity);
  });

  it('when negated should not be the same as the global Infinity', function() {
    expect.assertions(1);
    expect(-INFINITY).not.toBe(mathematicalInfinity);
  });
});
