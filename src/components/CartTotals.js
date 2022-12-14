import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { shippingFee } from '../utils/constants';

const CartTotals = ({ totalPrice }) => {
  let { isAuthenticated , loginWithRedirect} = useAuth0();


  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :<span>{formatPrice(totalPrice)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(totalPrice + shippingFee)}</span>
          </h4>
        </article>
        {isAuthenticated ? (
          <Link class="btn" to="/checkout">proceed to checkout</Link>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>login</button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    article {
      padding: 1.5rem;
    }
  }
`;

export default CartTotals;
