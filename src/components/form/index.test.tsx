import {
  // logRoles,
  render,
  screen,
} from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Form } from '.';

// fit/it.only(...) will perform only this test
// xit/it.skip(...) will skip test

// for searching element:
// - getBy... returns the matching node or throw an error if not found;
// - findBy... only use to wait for an element to appear/disappear.
// returns a promise which resolves when an element is found or rejected after 1000ms (by default);
// - queryBy... only use to verify that element not rendered. return matching node or null;
// all methods above throws an error if more than one was found

// for searching all elements:
// queryAllBy... (returns an empty array if not found), getAllBy..., findAllBy...

// queries priority:
// 1) getByRole;
// 2) getByLabelText;
// 3) getByPlaceholderText;
// 4) getByText;

// querySelector is not recommended to be used, because class/id/attribute are not visible to the user

// to print virtual DOM in console use screen.debug()
// to show all roles in current virtual DOM use logRoles()

// js-dom matchers:
// https://github.com/testing-library/jest-dom?tab=readme-ov-file#table-of-contents

// chrome extension which will help to create queries:
// https://chromewebstore.google.com/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano

describe('Form', () => {
  // describe() can be nested

  it('renders correctly', () => {
    render(<Form />); // creates a virtual DOM

    const pageHeadingEl = screen.getByRole('heading', { level: 1 }); // by <h> level
    const sectionHeadingEl = screen.getByRole('heading', { level: 2 });
    const textEl = screen.getByText('All fields are mandatory');
    // const nameInputEl = screen.getByDisplayValue('Vlad'); // returns input/textarea/select that has this value
    const nameInputEl = screen.getByLabelText(/name/i); // return element associated with this label
    const bioInputEl = screen.getByRole('textbox', { name: 'Bio' }); // by <label> name
    const jobSelectEl = screen.getByRole('combobox');
    const checkboxEl = screen.getByRole('checkbox');
    const submitButtonEl = screen.getByRole('button', { name: 'Submit' }); // by <button> content

    expect(pageHeadingEl).toBeInTheDocument();
    expect(sectionHeadingEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
    expect(nameInputEl).toBeInTheDocument();
    expect(bioInputEl).toBeInTheDocument();
    expect(jobSelectEl).toBeInTheDocument();
    expect(checkboxEl).toBeInTheDocument();
    expect(submitButtonEl).toBeInTheDocument();
  });

  // it('renders all roles in DOM', () => {
  //   const view = render(<Form />);

  //   logRoles(view.container);
  // });
});
