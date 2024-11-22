import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GptsListPage from '../pages/gptsListPage';

test('renders a button with text "Create a New GPT"', () => {
  // Render the GptsListPage component
  render(<GptsListPage items={[]} />);

  // Query the button by its text content
  const buttonElement = screen.getByText('Create a New GPT');

  // Assert that the button is in the document
  expect(buttonElement).toBeInTheDocument();
});
