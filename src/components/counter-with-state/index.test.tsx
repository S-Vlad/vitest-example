import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { CounterWithState } from '.';

describe('CounterWithState', () => {
  it('renders correctly', () => {
    render(<CounterWithState />);

    const headingEl = screen.getByRole('heading');
    const incrementButtonEl = screen.getByRole('button', { name: 'Increment' });

    expect(headingEl).toBeInTheDocument();
    expect(incrementButtonEl).toBeInTheDocument();
  });

  it('renders count value equal to 0', () => {
    render(<CounterWithState />);

    const countEl = screen.getByRole('heading');
    expect(countEl).toHaveTextContent('0');
  });

  it('renders count value equal to 1 after clicking the increment button', async () => {
    const user = userEvent.setup(); // recommended to invoke before render
    render(<CounterWithState />);

    const incrementButtonEl = screen.getByRole('button', { name: 'Increment' });
    const countEl = screen.getByRole('heading');

    await user.click(incrementButtonEl); // all user methods are asynchronous
    expect(countEl).toHaveTextContent('1');
  });

  it('renders count value equal to 10 after clicking the set button', async () => {
    const user = userEvent.setup();
    render(<CounterWithState />);

    const countInputEl = screen.getByRole('spinbutton');
    const setButtonEl = screen.getByRole('button', { name: 'Set' });
    const countEl = screen.getByRole('heading');

    await user.type(countInputEl, '10');
    expect(countInputEl).toHaveValue(10);
    await user.click(setButtonEl);
    expect(countEl).toHaveTextContent;
  });

  it('have focus in right order', async () => {
    const user = userEvent.setup();
    render(<CounterWithState />);

    const countInputEl = screen.getByRole('spinbutton');
    const setButtonEl = screen.getByRole('button', { name: 'Set' });
    const incrementButtonEl = screen.getByRole('button', { name: 'Increment' });

    await user.tab();
    expect(incrementButtonEl).toHaveFocus();
    await user.tab();
    expect(countInputEl).toHaveFocus();
    await user.tab();
    expect(setButtonEl).toHaveFocus();
  });

  it('matches with snapshot', () => {
    const { baseElement } = render(<CounterWithState />);

    expect(baseElement).toMatchSnapshot(); // creates file with snapshot if doesn't exist
  });
});
