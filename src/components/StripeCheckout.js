import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice, getTotals } from '../utils/helpers';
import { useHistory } from 'react-router-dom';
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
} from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const CheckoutForm = () => {
  let { user } = useAuth0();
  let { cart } = useCartContext();
  let { totalPrice } = getTotals(cart);

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div class="empty">
          <h2>Your cart is empty</h2>
          <a class="btn" href="/products">
            fill it
          </a>
        </div>
      </Wrapper>
    );
  }

  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <article>
            <h4>Hello, {user.name}</h4>
            <p>Your total is {formatPrice(totalPrice)}</p>
            <p>Test Card Number: 4242 4242 4242 4242</p>
          </article>
          <form>
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <FaCcVisa style={{ color: ' navy' }} />
              <FaCcAmex style={{ color: ' blue' }} />
              <FaCcMastercard style={{ color: ' red' }} />
              <FaCcDiscover style={{ color: ' orange' }} />
            </div>
            <label for="cname">Name on Card</label>
            <input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            />
            <label for="ccnum">Credit card number</label>
            <input
              type="text"
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
            />
            <label for="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            />

            <input type="text" name="" id="" style={{ display: 'none' }} />

            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder="2018"
                />
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" />
              </div>
            </div>

            <input type="submit" value="Pay" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5em 0;

  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }

  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  .col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }

  .col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }

  .col-50,
  .col-75 {
    padding: 0 16px;
  }

  .container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  input[type='text'] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    padding: 7px 0;
    font-size: 24px;
  }

  svg {
    margin-right: 10px;
  }

  .btn {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .btn:hover {
    background-color: #45a049;
  }

  span.price {
    float: right;
    color: grey;
  }

  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
  }
`;

export default StripeCheckout;
