import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stars } from '../components';

test('should display reviews number', () => {
  render(<Stars reviews={50} stars={5} />);
  let reviewsElement = screen.getByText(/50 customer reviews/i);

  expect(reviewsElement).toBeInTheDocument();
});

describe('should display the corect number of stars', () => {
  function getStarsTypes(params) {
    let fullStars = document.getElementsByClassName('full-star');
    let halfStars = document.getElementsByClassName('half-star');
    let emptyStars = document.getElementsByClassName('empty-star');

    return { fullStars, halfStars, emptyStars };
  }

  test('5 stars rate', () => {
    render(<Stars reviews={50} stars={5} />);
    let  { fullStars, halfStars, emptyStars } = getStarsTypes()

    expect(fullStars).toHaveLength(5)
    expect(halfStars).toHaveLength(0)
    expect(emptyStars).toHaveLength(0)
  });
  test('4.3 stars rate', () => {
    render(<Stars reviews={50} stars={4.3} />);
    let  { fullStars, halfStars, emptyStars } = getStarsTypes()

    expect(fullStars).toHaveLength(4)
    expect(halfStars).toHaveLength(0)
    expect(emptyStars).toHaveLength(1)
  });
  test('3.8 stars rate', () => {
    render(<Stars reviews={50} stars={3.8} />);
    let  { fullStars, halfStars, emptyStars } = getStarsTypes()

    expect(fullStars).toHaveLength(3)
    expect(halfStars).toHaveLength(1)
    expect(emptyStars).toHaveLength(1)
  });
});
