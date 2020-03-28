import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBeehiveAction } from './beehive.actions';

const Beehive = ({
  name, fetch, beehiveId, news,
}) => {
  useEffect(() => {
    fetch(beehiveId);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      {news.map(({ title }) => title)}
    </div>
  );
};

Beehive.propTypes = {
  name: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  beehiveId: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = ({ beehive }) => ({
  ...beehive,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (id) => dispatch(fetchBeehiveAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Beehive);
