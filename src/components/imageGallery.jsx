import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled('div')`
  background-image: ${({ src }) => `url("${src}")`};
  height: 10rem;
  width: 10rem;
  background-size: cover;
  margin: 0.4rem;
  border-radius: 2px;
  box-shadow: 0 0 5px silver;
`;

const ImageGallery = ({ images }) => (
  <Wrapper>
    {images.map((img) => <Image src={`http://localhost:3000/static/${img}`} alt={img} key={img} />)}
  </Wrapper>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
