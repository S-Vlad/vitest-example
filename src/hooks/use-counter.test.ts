import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useCounter } from './use-counter';

describe('useCounter', () => {
  it('should return default value', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it('should return value from props', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialValue: 5,
      },
    });
    expect(result.current.count).toBe(5);
  });

  it('should increment the count', () => {
    const { result } = renderHook(useCounter);

    // makes sure that all state updates (or user events/data fetching/rendering)
    // have been processed and applied to the DOM before any assertions
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });

  it('should decrement the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
