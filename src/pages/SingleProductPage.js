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
  let {
    fetchSingleProduct,
    singleProduct: product,
    singleProductLoading: loading,
    singleProductError: error,
  } = useProductsContext();

  let { id } = useParams();
  let productUrl = url + id;

  useEffect(() => {
    fetchSingleProduct(productUrl);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  let {
    id: SKU,
    stock,
    price,
    shipping,
    featured,
    colors,
    images,
    category,
    reviews,
    stars,
    name,
    description,
    company,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product/>
      <div className="section section-center page">
        <Link className="btn" to="/products">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images}/>
          <section className="content">
            <h2>{name}</h2>
            <Stars reviews={reviews} stars={stars}/>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">
              {description}
            </p>
            <p className="info">
              <span>Available : </span>{stock > 0?'In stock':'Out Of Stock'}
            </p>
            <p className="info">
              <span>SKU : </span>{SKU}
            </p>
            <p className="info">
              <span>Brand : </span>{company}
            </p>
            <hr />
            <AddToCart product={product} />
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
