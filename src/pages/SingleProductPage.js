import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  let {fetchSingleProduct} = useProductsContext()
  let {id} = useParams()
  let productUrl = url+id
  
  useEffect(()=>{
    fetchSingleProduct(productUrl)
    //eslint-disable-next-line
  },[])

  return (
    <Wrapper>
      <PageHero />
      <div className="section section-center page">
        <Link className="btn" to="/products">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages />
          <section className="content">
            <h2>modern poster</h2>
            <Stars />
            <h5 className="price">$30.99</h5>
            <p className="desc">
              Cloud bread VHS hell of banjo bicycle rights jianbing umami
              mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
              dreamcatcher waistcoat, authentic chillwave trust fund. Viral
              typewriter fingerstache pinterest pork belly narwhal. Schlitz
              venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
              trust fund hashtag kinfolk microdosing gochujang live-edge
            </p>
            <p className="info">
              <span>Available : </span>In stock
            </p>
            <p className="info">
              <span>SKU : </span>recQ0fMd8T0Vk211E
            </p>
            <p className="info">
              <span>Brand : </span>liddy
            </p>
            <hr />
            <AddToCart />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
