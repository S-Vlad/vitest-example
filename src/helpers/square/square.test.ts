import { describe, expect, it, vi } from 'vitest';

import { square } from './square';

describe('#square', () => {
  it('returns "1" if argument equal to "1"', () => {
    expect(square(1)).toBe(1);
  });

  it('returns "36" if argument equal to "6"', () => {
    expect(square(6)).toBe(36);
  });

  it('calls Math.pow 1 time', () => {
    const spyPow = vi.spyOn(Math, 'pow');

    expect(square(-11)).toBe(121);
    expect(spyPow).toBeCalledTimes(1);

    // needed because spy functions accumulates the count of calls
    vi.restoreAllMocks();
  });
});
