import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@cda/input';
import Button from '@cda/button/src';
import { Rows, Columns } from '@cda/flex';

import { createBeehiveAction } from './beehives.actions';
import Beehive from './widgets/beehive';
import useInput from '../../../hooks/useInput';
import Search from './widgets/search';
import H2 from '../../../components/h2';
import Card from '../../../components/card';
import useApi from '../../../hooks/useApi';
import Loading from '../../../components/loading';
import Alert from '../../../components/alert';

const Beehives = () => {
  const dispatch = useDispatch();
  const data = useApi('beehive', 'all');
  const message = useSelector(({ beehives }) => beehives.message);
  const severity = useSelector(({ beehives }) => beehives.severity);
  const [newBeehive, handleNewBeehive, setNewBeehive] = useInput('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(createBeehiveAction(newBeehive));
    setNewBeehive('');
  }, [newBeehive]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <H2>Gestion des ruches</H2>
      <Rows>
        <form onSubmit={onSubmit}>
          <Columns>
            <Rows justifyContent="space-between">
              <Input type="text" onChange={handleNewBeehive} value={newBeehive} placeholder="Nom de la nouvelle ruche" />
              <Button type="submit">Créer</Button>
            </Rows>
            <Alert severity={severity}>{message}</Alert>
          </Columns>
        </form>
        <Search />
      </Rows>
      {data.map((beehive) => (
        <Card key={beehive.id}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Beehive {...beehive} key={beehive.id} />
        </Card>
      ))}
    </div>
  );
};

Beehives.propTypes = {

};

export default Beehives;
