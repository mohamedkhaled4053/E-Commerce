import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Error } from '../components';

test('should show error message', () => {
  let errorMessage = /there was an error.../;
  render(<Error />);
  let errorHeading = screen.getByRole('heading', { name: errorMessage });
  expect(errorHeading).toBeInTheDocument()
});

test('should not have page class if not passed as prop', () => {
  render(<Error />);
    const children = document.getElementsByClassName('page')

  expect(children.length).toBe(0)
});
test('should have page class if passed as prop', () => {
  render(<Error page/>);
    const children = document.getElementsByClassName('page')

  expect(children.length).toBe(1)
});

