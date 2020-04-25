import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';
import { useEffect } from 'react';
import { fetchData } from './useApi.actions';


const useApi = (resource, id) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => R.pathOr(null, ['useApi', resource, id], state));

  useEffect(() => {
    dispatch(fetchData(resource, id));
  }, []);

  return data;
};

export default useApi;
