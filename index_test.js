const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';
      //exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.equal(actual, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const input = 12;
      const expected = '12';
      //exercise
      const actual = Rooster.timeAtDawn(input);
      //verify
      assert.strictEqual(actual, expected);
    }),
    it ('throws a rangeError if passed a number less than zero', () => {
      //setup
      const test = -1;
      const expected = RangeError;
      //exercise
      //verify
      assert.throws( () => {
        Rooster.timeAtDawn(test)
      }, expected)
    }),
    it ('throws a rangeError if passed a number greater than 24', () => {
      //setup
      const test = 25;
      const expected = RangeError;
      //exercise
      //verify
      assert.throws( () => {
        Rooster.timeAtDawn(test)
      }, expected)
    })
  })
});