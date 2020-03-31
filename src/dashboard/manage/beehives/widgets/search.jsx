import React, { useCallback } from 'react';
import { Rows } from '@cda/flex/src';
import Input from '@cda/input';
import { useDispatch } from 'react-redux';
import Button from '@cda/button/src';
import useInput from '../../../../hooks/useInput';
import { fetchBeehivesAction } from '../beehives.actions';

const Search = () => {
  const dispatch = useDispatch();
  const [terms, handleTerms] = useInput('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(fetchBeehivesAction(terms));
  }, [terms]);

  return (
    <form onSubmit={onSubmit}>
      <Rows>
        <Input type="text" onChange={handleTerms} value={terms} placeholder="Rechercher..." />
        <Button type="submit">Rechercher</Button>
      </Rows>
    </form>
  );
};

Search.propTypes = {};

export default Search;
