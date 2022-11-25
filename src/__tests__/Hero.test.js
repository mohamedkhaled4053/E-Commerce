import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Hero } from '../components';

function MockHero() {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
}

test('should have heading with specific text content', () => {
  render(<MockHero />);
  let heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});


test('should have paragraph', () => {
  render(<MockHero />);
  let paragraph =document.querySelector('p')
  expect(paragraph).toBeInTheDocument();
});

test('should have two images', () => {
  render(<MockHero />);
  let images =document.querySelectorAll('img')
  expect(images.length).toBe(2);
});
