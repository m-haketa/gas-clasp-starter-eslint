import { sum } from '../src/sample';

describe('sum', () => {
  it('normal', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
