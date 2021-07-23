import { render, screen } from '@testing-library/react';
import App from './App';

test('renders IP Address locator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/IP Address locator/i);
  expect(linkElement).toBeInTheDocument();
});
