import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageHero } from '../components';
import { BrowserRouter } from 'react-router-dom';

function MockPageHero(props) {
    return (
      <BrowserRouter>
        <PageHero {...props}/>
      </BrowserRouter>
    );
  }

test('should show the links pased on the props', () => {
  render(<MockPageHero title='testTitle' />);

  let homeLink = screen.getByRole('link',{name:/home/i});
  let title = screen.getByRole('heading',{name: /testTitle/i});

  expect(homeLink).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test('should show products link and product name if product prop passed', () => {
  render(<MockPageHero title='testTitle' product/>);

  let homeLink = screen.getByRole('link',{name:/home/i});
  let productsLink = screen.getByRole('link',{name:/products/i});
  let title = screen.getByRole('heading',{name: /testTitle/i});

  expect(homeLink).toBeInTheDocument();
  expect(productsLink).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
