import { ExponentialStrengthPipe } from './capitalize.pipe';

describe('ExponentialStrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialStrengthPipe();
    expect(pipe).toBeTruthy();
  });
});
