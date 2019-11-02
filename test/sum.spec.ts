import { sum } from '../src/sum';

jest.unmock('../src/sum');

describe('sum', () => {
  it('normal', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
