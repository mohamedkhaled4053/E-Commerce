import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const AmountButtons = ({id, amount, increase, decrease }) => {
  let {alertId} = useCartContext()
  return (
    <Wrapper className="amount-btsn">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className={`amount ${alertId === id ? 'alert':'clean'}`}>{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
  h2.alert{
    color: red
  }
  h2.clean{
    color: black;
    transition: 1s
  }
`;

export default AmountButtons;
