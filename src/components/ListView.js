import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
const ListView = () => {
  return (
    <Wrapper>
      <article>
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359"
          alt="modern poster"
        />
        <div>
          <h4>modern poster</h4>
          <h5 className="price">$30.99</h5>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic ...
          </p>
          <a className="btn" href="/products/recQ0fMd8T0Vk211E">
            Details
          </a>
        </div>
      </article>
      <article>
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66"
          alt="bar stool"
        />
        <div>
          <h4>bar stool</h4>
          <h5 className="price">$40.99</h5>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic ...
          </p>
          <a className="btn" href="/products/recoM2MyHJGHLVi5l">
            Details
          </a>
        </div>
      </article>
      <article>
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f"
          alt="armchair"
        />
        <div>
          <h4>armchair</h4>
          <h5 className="price">$125.99</h5>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic ...
          </p>
          <a className="btn" href="/products/recd1jIVIEChmiwhe">
            Details
          </a>
        </div>
      </article>
      <article>
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7"
          alt="suede armchair"
        />
        <div>
          <h4>suede armchair</h4>
          <h5 className="price">$159.99</h5>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic ...
          </p>
          <a className="btn" href="/products/recroK1VD8qVdMP5H">
            Details
          </a>
        </div>
      </article>
      <article>
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a"
          alt="leather chair"
        />
        <div>
          <h4>leather chair</h4>
          <h5 className="price">$200.99</h5>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic ...
          </p>
          <a className="btn" href="/products/recoW8ecgjtKx2Sj2">
            Details
          </a>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
