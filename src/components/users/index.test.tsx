import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { FAKE_USERS } from '../../mocks/data';
import { failedHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import { createQueryWrapper } from '../../tests/test-utils';

import { Users } from '.';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Users', () => {
  it('renders correctly', () => {
    render(<Users />, { wrapper: createQueryWrapper() });

    const headingEl = screen.getByRole('heading');
    expect(headingEl).toHaveTextContent('Users');
  });

  it('renders users list', async () => {
    render(<Users />, { wrapper: createQueryWrapper() });

    const listItemsElements = await screen.findAllByRole('listitem');
    expect(listItemsElements).toHaveLength(FAKE_USERS.length);
  });

  it('renders backend error', async () => {
    server.use(...failedHandlers);

    render(<Users />, { wrapper: createQueryWrapper() });

    const errorEl = await screen.findByText('Request failed with status code 404');
    expect(errorEl).toBeInTheDocument();
  });
});
