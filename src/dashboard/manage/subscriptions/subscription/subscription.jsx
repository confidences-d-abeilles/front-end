import React from 'react';
import PropTypes from 'prop-types';
import H2 from '../../../../components/h2';
import Loading from '../../../../components/loading';
import useApi from '../../../../hooks/useApi';
import Card from '../../../../components/card';
import { humanReadable } from '../../../../utils/date';

const Subscription = ({ id }) => {
  const subscription = useApi('subscription', id);

  if (!subscription) {
    return <Loading />;
  }

  const { product: { name }, start, end } = subscription;

  return (
    <>
      <H2>{name}</H2>
      <Card>
        Date de début :&nbsp;
        {humanReadable(start)}
        <br />
        Date de fin :&nbsp;
        {humanReadable(end)}
      </Card>
    </>
  );
};

Subscription.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Subscription;
