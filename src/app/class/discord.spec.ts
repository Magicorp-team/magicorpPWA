import { User } from './discord';

describe('Discord', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
