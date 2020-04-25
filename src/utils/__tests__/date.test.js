import { humanReadable } from '../date';

jest.unmock('../date');

const ISO = '2020-04-25T00:00:00+02:00';
const HUMAN_READABLE = '25/04/2020';
const INVALID_DATE = 'Invalid Date';

describe('humanReadable', () => {
  it(`should give ${HUMAN_READABLE} from ${ISO}`, () => {
    expect(humanReadable(ISO)).toEqual(HUMAN_READABLE);
  });

  it(`should give ${INVALID_DATE} without parameters`, () => {
    expect(humanReadable()).toEqual(INVALID_DATE);
  });
});
