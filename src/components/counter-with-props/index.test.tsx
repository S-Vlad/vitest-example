import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { CounterWithProps } from '.';

describe('CounterWithProps', () => {
  it('renders correctly with props', () => {
    render(<CounterWithProps count={13} />);

    const headingEl = screen.getByRole('heading');
    const paragraphEl = screen.getByText(13);

    expect(headingEl).toBeInTheDocument();
    expect(paragraphEl).toBeInTheDocument();
  });

  it('calls correctly handlers', async () => {
    const user = userEvent.setup();
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();

    render(<CounterWithProps count={13} onIncrement={onIncrement} onDecrement={onDecrement} />);

    const incrementBtnEl = screen.getByRole('button', { name: 'Increment' });
    const decrementBtnEl = screen.getByRole('button', { name: 'Decrement' });

    await user.click(incrementBtnEl);
    await user.click(incrementBtnEl);
    expect(onIncrement).toHaveBeenCalledTimes(2);

    await user.click(decrementBtnEl);
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });
});
