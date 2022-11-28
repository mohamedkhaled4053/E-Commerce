import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Loading } from '../components';

test('should have loading div', () => {
  render(<Loading />);
  let loadingDiv = document.querySelector('.loading')
  expect(loadingDiv).toBeInTheDocument()
});

test('should not have page class if not passed as prop', () => {
  render(<Loading />);
    const children = document.getElementsByClassName('page-100')

  expect(children.length).toBe(0)
});
test('should have page class if passed as prop', () => {
  render(<Loading page/>);
    const children = document.getElementsByClassName('page-100')

  expect(children.length).toBe(1)
});

