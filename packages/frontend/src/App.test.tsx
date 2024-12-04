import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders Available Rooms heading', async () => {
  await act(async () => {
    render(<App />);
  });
  const headingElement = screen.getByText('Available Rooms');
  expect(headingElement).toBeInTheDocument();
});
