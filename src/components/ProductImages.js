import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = () => {
  return (
    <Wrapper>
      <img
        src="https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg"
        alt="main"
        className="main"
      />
      <div className="gallery">
        <img
          src="https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg"
          alt="0-pexels-pixabay-462235.jpg"
          className="active"
        />
        <img
          src="https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg"
          alt="z-extra-1.jpeg"
          className="null"
        />
        <img
          src="https://dl.airtable.com/.attachments/a73777f8a2cbf4820ccaa6aa4349db01/c541de4b/z-extra-2.jpeg"
          alt="z-extra-2.jpeg"
          className="null"
        />
        <img
          src="https://dl.airtable.com/.attachments/7a50daf83875879b373d91ebb9bb6012/c1695f7e/z-extra-3.jpeg"
          alt="z-extra-3.jpeg"
          className="null"
        />
        <img
          src="https://dl.airtable.com/.attachments/5592998dcaee77b12c50bda63dd94d06/6ad61540/z-extra-4.jpeg"
          alt="z-extra-4.jpeg"
          className="null"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
