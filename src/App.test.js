import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { Balance } from './components/Balance';

test('renders learn react link', () => {
  render(<Balance />);
  const linkElement = screen.getByText(/Current Balance/i);
  expect(linkElement).toBeInTheDocument();
});
