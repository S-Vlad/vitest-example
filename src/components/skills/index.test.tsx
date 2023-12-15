import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skills } from '.';

describe('Skills', () => {
  const skills = ['react', 'vitest', 'react-testing-library'];

  it('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listEl = screen.queryByRole('list');
    expect(listEl).toBeInTheDocument();
  });

  it('renders list of skills', () => {
    render(<Skills skills={skills} />);

    const itemsElements = screen.getAllByRole('listitem');
    expect(itemsElements).toHaveLength(skills.length);
  });

  it('renders "login" button', () => {
    render(<Skills skills={skills} />);

    const loginBtnEl = screen.getByRole('button', { name: 'Login' });
    expect(loginBtnEl).toBeInTheDocument();
  });

  it('not renders "start learning" button', () => {
    render(<Skills skills={skills} />);

    const startLearningBtnEl = screen.queryByRole('button', { name: 'Start learning' });
    expect(startLearningBtnEl).not.toBeInTheDocument();
  });

  it('renders "start learning" button eventually', async () => {
    render(<Skills skills={skills} />);

    const startLearningBtnEl = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 1200, // change default timeout
      },
    );
    expect(startLearningBtnEl).toBeInTheDocument();
  });
});
