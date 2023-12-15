import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '../../tests/test-utils';

import { MuiMode } from '.';

describe('Mui mode', () => {
  it('renders with correct theme', () => {
    render(<MuiMode />);

    const headingEl = screen.getByRole('heading');
    expect(headingEl).toHaveTextContent('light mode');
  });
});
