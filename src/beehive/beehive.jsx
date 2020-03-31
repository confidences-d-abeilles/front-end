import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBeehiveAction } from './beehive.actions';

const Beehive = ({
  name, fetch, beehiveId, news, images,
}) => {
  useEffect(() => {
    fetch(beehiveId);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      {images && images.map(((img) => img && <img src={`http://192.168.1.44:3000/static/${img}`} alt={img} />))}
      {news.map(({ title }) => title)}
    </div>
  );
};

Beehive.propTypes = {
  name: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  beehiveId: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ beehive }) => ({
  ...beehive,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (id) => dispatch(fetchBeehiveAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Beehive);
