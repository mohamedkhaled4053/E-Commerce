import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { AddToCart } from '../components';
import { CartProvider } from '../context/cart_context';
import { testSingleProduct } from '../utils/mockConstants';

function MockAddToCart(props) {
  return (
    <BrowserRouter>
      <CartProvider>
        <AddToCart {...props}></AddToCart>
      </CartProvider>
    </BrowserRouter>
  );
}

beforeEach(() => {
  render(<MockAddToCart product={testSingleProduct} />);
});

// helper functions
function getAmountButtonsElements() {
  let amount = document.querySelector('.amount');
  let buttons = document.getElementsByClassName('amount-btn');
  let decreaseButton = buttons[0];
  let increaseButton = buttons[1];
  return { amount, decreaseButton, increaseButton };
}

describe('colors', () => {
  // the test product have three colors
  test('at the beginning the active color is the first one', () => {
    let colorsButtons = document.getElementsByClassName('color-btn');

    expect(colorsButtons[0].classList).toContain('active');
    expect(colorsButtons[1].classList).not.toContain('active');
    expect(colorsButtons[2].classList).not.toContain('active');
  });

  test('active color change to the click button color', () => {
    let colorsButtons = document.getElementsByClassName('color-btn');

    userEvent.click(colorsButtons[1]);

    expect(colorsButtons[0].classList).not.toContain('active');
    expect(colorsButtons[1].classList).toContain('active');
    expect(colorsButtons[2].classList).not.toContain('active');
  });
});

describe('AmountButtons', () => {
  test('should have amount of 1 at the beginning', () => {
    let { amount } = getAmountButtonsElements();
    expect(amount).toHaveTextContent('1');
  });

  test('should toggle the amount with buttons', () => {
    let { amount, decreaseButton, increaseButton } = getAmountButtonsElements();

    userEvent.click(increaseButton);
    userEvent.click(increaseButton);

    expect(amount).toHaveTextContent('3');

    userEvent.click(decreaseButton);

    expect(amount).toHaveTextContent('2');
  });

  test('alert should not exist at the begaining', () => {
    let alert = screen.queryByRole('paragraph', {
      name: "can't be less than one",
    });

    expect(alert).toBeNull();
  });

  test('should have alert message if user try to decrease less than one', () => {
    let { amount, decreaseButton } = getAmountButtonsElements();

    userEvent.click(decreaseButton);

    let alert = screen.getByText(/can't be less than one/i);

    expect(alert).toBeInTheDocument();
    expect(amount).toHaveTextContent('1');
  });

  test('should have alert message if user try to increase more than available in stock', () => {
    let { amount, increaseButton } = getAmountButtonsElements();

    for (let i = 0; i < testSingleProduct.stock; i++) {
      userEvent.click(increaseButton);
    }

    let alert = screen.getByText(/this is all amount in stock for now/i);

    expect(alert).toBeInTheDocument();
    expect(amount).toHaveTextContent(testSingleProduct.stock);
  });
});
