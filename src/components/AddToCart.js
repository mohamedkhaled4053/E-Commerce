import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({product}) => {
  let { id, colors, stock } = product
  let [mianColor, setMainColor] = useState(colors[0]);
  let [amount, setAmount] = useState(1);
  let [alert, setAlert] = useState('');

  let { addToCart } = useCartContext();

  function increase() {
    setAlert('');
    if (amount < stock) {
      setAmount(amount + 1);
    } else {
      setAlert('this is all amount in stock for now');
    }
  }

  function decrease() {
    setAlert('');
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAlert("can't be less than one");
    }
  }

  return (
    <Wrapper>
      <div className="colors">
        <span> colors : </span>
        <div>
          {colors.map((color) => (
            <button
              className={`color-btn ${color === mianColor && 'active'}`}
              style={{ background: color }}
              onClick={() => setMainColor(color)}
            >
              {color === mianColor && <FaCheck />}
            </button>
          ))}
        </div>
      </div>

      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        {alert && <p className="alert">{alert}</p>}
        <Link
          className="btn"
          to="/cart"
          onClick={() => addToCart(id, amount, mianColor, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
    .alert {
      color: red;
      margin-bottom: none;
    }
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
