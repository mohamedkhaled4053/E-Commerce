import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images }) => {
  let [mainImg, setMainImg] = useState(images[0]);

  function handlekeydown(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      // get index of mianImg
      let index = images.indexOf(mainImg);

      // change it based on arrow
      if (e.key === 'ArrowRight') {
        index++;
        if (index > images.length - 1) {
          index = 0;
        }
      }
      if (e.key === 'ArrowLeft') {
        index--;
        if (index < 0) {
          index = images.length - 1;
        }
      }
      // change mainImg
      setMainImg(images[index]);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handlekeydown);

    return () => {
      document.removeEventListener('keydown', handlekeydown);
    };
  });

  return (
    <Wrapper>
      <img src={mainImg.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image) => {
          let { id, url, filename } = image;
          return (
            <img
              key={id}
              src={url}
              alt={filename}
              className={id === mainImg.id && 'active'}
              onClick={() => setMainImg(image)}
            />
          );
        })}
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
