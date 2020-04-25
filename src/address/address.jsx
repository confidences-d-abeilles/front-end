import React, { useCallback } from 'react';
import { Item, Rows } from '@cda/flex';
import Button from '@cda/button';
import Input from '@cda/input';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { submitAddress } from './address.actions';

const Address = () => {
  const [firstname, handleFirstname] = useInput();
  const [name, handleName] = useInput();
  const [line1, handleLine1] = useInput();
  const [line2, handleLine2] = useInput();
  const [gender, handleGender] = useInput();
  const [zipcode, handleZipcode] = useInput();
  const [city, handleCity] = useInput();
  const [country, handleCountry] = useInput();
  const message = useSelector(({ address }) => address.error);
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(submitAddress({
      line1,
      line2,
      gender,
      firstname,
      name,
      zipcode,
      city,
      country,
    }));
  }, [line1, line2, gender, firstname, name, zipcode, city, country]);

  return (
    <Rows>
      <Item>
        <form onSubmit={handleSubmit}>
          <h2>Adresse de livraison</h2>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <Input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGender} />
            Homme
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <Input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGender} />
            Femme
          </label>

          <Input type="text" value={firstname} onChange={handleFirstname} placeholder="Prénom" />
          <Input type="text" value={name} onChange={handleName} placeholder="Nom" />
          <Input type="text" value={line1} onChange={handleLine1} placeholder="Ligne 1" />
          <Input type="text" value={line2} onChange={handleLine2} placeholder="Ligne 2" />
          <Input type="text" value={zipcode} onChange={handleZipcode} placeholder="Code postal" />
          <Input type="text" value={city} onChange={handleCity} placeholder="Ville" />
          <Input type="text" value={country} onChange={handleCountry} placeholder="Pays" />
          <Button type="submit">Valider</Button>
          {message}
        </form>
      </Item>
    </Rows>
  );
};

Address.propTypes = {};

export default Address;
