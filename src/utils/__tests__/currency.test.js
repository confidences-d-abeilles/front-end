
import humanReadable from '../currency';

jest.unmock('../currency');

const RAW_AMOUNT = 38525;
const CORRECT_STRING = '385.25 €';

describe('currency', () => {
  it(`should return ${CORRECT_STRING} with ${RAW_AMOUNT}`, () => {
    expect(humanReadable(RAW_AMOUNT)).toMatch(CORRECT_STRING);
  });

  it('should return false when nothing is passed', () => {
    expect(humanReadable()).toBe(false);
  });

  it('should return false when a wrong type is passed', () => {
    expect(humanReadable(CORRECT_STRING)).toBe(false);
  });
});
