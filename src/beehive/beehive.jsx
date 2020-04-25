import React from 'react';
import PropTypes from 'prop-types';
import useApi from '../hooks/useApi';
import Loading from '../components/loading';

const Beehive = ({ beehiveId }) => {
  const beehive = useApi('beehive', beehiveId);

  if (!beehive) {
    return <Loading />;
  }

  const {
    name, news, images,
  } = beehive;

  return (
    <div>
      <h2>{name}</h2>
      {images && images.map(((img) => img && <img src={`http://192.168.1.44:3000/static/${img}`} alt={img} />))}
      {news.map(({ title }) => title)}
    </div>
  );
};

Beehive.propTypes = {
  beehiveId: PropTypes.string.isRequired,
};

export default Beehive;
