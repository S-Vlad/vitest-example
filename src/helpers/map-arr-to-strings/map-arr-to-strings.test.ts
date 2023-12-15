import { describe, expect, it } from 'vitest';

import { mapArrToStrings } from './map-arr-to-strings';

describe('#mapArrToStrings', () => {
  it('returns correct values', () => {
    expect(mapArrToStrings([1, 2, 3])).toStrictEqual(['1', '2', '3']);
  });

  it('filtering correctly', () => {
    expect(mapArrToStrings([1, 2, null, undefined])).toStrictEqual(['1', '2']);
  });

  it('returns empty array', () => {
    expect(mapArrToStrings([])).toStrictEqual([]);
  });

  it('not equal to wrong values', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toStrictEqual(['1', '2', '3', '4']);
  });
});
