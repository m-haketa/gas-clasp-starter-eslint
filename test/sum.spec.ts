import { sum } from '../src/sample';

jest.unmock('../src/sum');

describe('sum', () => {
  it('normal', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
