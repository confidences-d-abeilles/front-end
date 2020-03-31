import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@cda/input';
import Button from '@cda/button/src';
import { Rows } from '@cda/flex';

import { createBeehiveAction, fetchBeehivesAction } from './beehives.actions';
import Beehive from './widgets/beehive';
import useInput from '../../../hooks/useInput';
import Search from './widgets/search';

const Beehives = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ beehives }) => beehives.beehives);
  const [newBeehive, handleNewBeehive, setNewBeehive] = useInput('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(createBeehiveAction(newBeehive));
    setNewBeehive('');
  }, [newBeehive]);

  useEffect(() => {
    dispatch(fetchBeehivesAction());
  }, []);

  return (
    <div>
      <h2>Gestion des ruches</h2>
      <Rows>
        <form onSubmit={onSubmit}>
          <Rows>
            <Input type="text" onChange={handleNewBeehive} value={newBeehive} placeholder="Nom de la nouvelle ruche" />
            <Button type="submit">Créer</Button>
          </Rows>
        </form>
        <Search />
      </Rows>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {data.map((beehive) => <Beehive {...beehive} />)}
    </div>
  );
};

Beehives.propTypes = {

};

export default Beehives;
