import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import QR from 'qrcode.react';
import Input from '@cda/input';
import { Rows } from '@cda/flex/src';
import Button from '@cda/button/src';

import { fetchManageBeehiveAction, updateBeehive, uploadBeehiveAction } from './beehive.actions';
import { getBeehive } from './beehive.selectors';
import useInput from '../../../../hooks/useInput';
import News from './news/newPanel';

const Component = ({ beehiveId }) => {
  const dispatch = useDispatch();
  const fileInput = useRef();
  useEffect(() => {
    dispatch(fetchManageBeehiveAction(beehiveId));
  }, []);

  const beehive = useSelector((state) => getBeehive(state));

  const [newId, handleNewId, setNewId] = useInput(beehive ? beehive.identifier : null);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(updateBeehive(beehiveId, {
      identifier: newId,
    }));
  }, [newId]);

  const onFileSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(uploadBeehiveAction(beehiveId, fileInput.current.files));
  }, [newId]);

  useEffect(() => {
    setNewId(beehive ? beehive.identifier : null);
  }, [beehive]);

  if (!beehive || beehive.id !== beehiveId) {
    return null;
  }

  const {
    name, occupation, news, lat, long, temp_in: tempIn, temp_out: tempOut, hygrometry,
  } = beehive;

  return (
    <div>
      <h2>{`Ruche ${name}`}</h2>
      <QR value={window.location.href} />
      <form onSubmit={onFileSubmit}>
        <input type="file" ref={fileInput} accept="image/*" multiple />
        <Button type="submit" primary>Envoyer</Button>
      </form>
      <form onSubmit={onSubmit}>
        <Rows>
          <p>Identifiant</p>
          <Input type="text" placeholder="Identifiant" value={newId} onChange={handleNewId} />
        </Rows>
        <p>{`Parrainée à ${occupation}%`}</p>
        <p>Taille de la ruche : 10 cadres</p>
        <p>Nombre de hausses : 0</p>
        <h3>Conditions climatiques</h3>
        <p>{`Température intérieure : ${tempIn}°C`}</p>
        <p>{`Température exterieure : ${tempOut}°C`}</p>
        <p>{`Hygrométrie : ${hygrometry}%`}</p>
        <h3>Position</h3>
        <p>{`Latitude : ${lat}`}</p>
        <p>{`Longitude : ${long}`}</p>
        <Button type="submit" primary>Enregistrer</Button>
      </form>
      <h3>News</h3>
      <News data={news} beehiveId={beehiveId} />
    </div>
  );
};

Component.propTypes = {
  beehiveId: PropTypes.string.isRequired,
};

export default Component;
