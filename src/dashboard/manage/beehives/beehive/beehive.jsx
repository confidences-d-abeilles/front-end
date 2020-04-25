import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import QR from 'qrcode.react';
import Input from '@cda/input';
import { Rows } from '@cda/flex/src';
import Button from '@cda/button/src';

import { updateBeehive, uploadBeehiveAction } from './beehive.actions';
import useInput from '../../../../hooks/useInput';
import News from './news/newPanel';
import H2 from '../../../../components/h2';
import Card from '../../../../components/card';
import ImageGallery from '../../../../components/imageGallery';
import useApi from '../../../../hooks/useApi';
import Loading from '../../../../components/loading';

const Component = ({ beehiveId }) => {
  const dispatch = useDispatch();
  const fileInput = useRef();

  const beehive = useApi('beehive', beehiveId);

  const [newId, handleNewId, setNewId] = useInput(beehive
    && beehive.identifier ? beehive.identifier : '');

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
    setNewId(beehive && beehive.identifier ? beehive.identifier : '');
  }, [beehive]);

  if (!beehive || beehive.id !== beehiveId) {
    return <Loading />;
  }

  const {
    name, occupation, news, lat, long, temp_in: tempIn, temp_out: tempOut, hygrometry, images,
  } = beehive;

  return (
    <div>
      <H2>{`Ruche ${name}`}</H2>
      <Rows wrap="wrap">
        <Card><QR value={window.location.href} /></Card>
        <Card>
          <p>
            {`Parrainée à ${occupation}%`}
            <br />
            Taille de la ruche : 10 cadres
            <br />
            Nombre de hausses : 0
            <br />
            {`Température intérieure : ${tempIn}°C`}
            <br />
            {`Température exterieure : ${tempOut}°C`}
            <br />
            {`Hygrométrie : ${hygrometry}%`}
            <br />
            {`Latitude : ${lat}`}
            <br />
            {`Longitude : ${long}`}
          </p>
        </Card>
        <Card>
          <form onSubmit={onSubmit}>
            <Rows>
              <p>Identifiant</p>
              <Input type="text" placeholder="Identifiant" value={newId} onChange={handleNewId} />
            </Rows>
            <Button type="submit" primary>Enregistrer</Button>
          </form>
        </Card>
      </Rows>
      <Card>
        <Rows>
          <ImageGallery images={images} />
          <form onSubmit={onFileSubmit}>
            <input type="file" ref={fileInput} accept="image/*" multiple />
            <Button type="submit" primary>Envoyer</Button>
          </form>
        </Rows>
      </Card>
      <h3>News</h3>
      <News data={news} beehiveId={beehiveId} />
    </div>
  );
};

Component.propTypes = {
  beehiveId: PropTypes.string.isRequired,
};

export default Component;
