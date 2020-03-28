import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSubscriptionsAction } from './subscriptions.actions';
import Subscription from './widgets/subscription';

const Subscriptions = ({ fetchSubscriptions, subscriptions }) => {
  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div>
      <h2>Mes parrainages</h2>
      {subscriptions.map((subscription) => <Subscription {...subscription} />)}
    </div>
  );
};

const mapStateToProps = ({ subscriptions }) => ({
  subscriptions: subscriptions.subscriptions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubscriptions: () => dispatch(fetchSubscriptionsAction()),
});

Subscriptions.propTypes = {
  fetchSubscriptions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
