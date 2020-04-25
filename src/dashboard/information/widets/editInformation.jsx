import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '@cda/input';
import { Rows } from '@cda/flex';
import Button from '@cda/button';

import useInput from '../../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { updateInformation } from '../information.actions';

const EditInformation = ({
  name: initialName,
  firstName: initialFirstName,
  email: initialEmail,
  phone: initialPhone,
  cb,
}) => {
  const dispatch = useDispatch();
  const [email, handleEmail] = useInput(initialEmail);
  const [firstname, handleFirstName] = useInput(initialFirstName);
  const [name, handleName] = useInput(initialName);
  const [phone, handlePhone] = useInput(initialPhone);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(updateInformation({
      email,
      firstname,
      phone,
      name,
    }));
    cb();
  });

  return (
    <form onSubmit={onSubmit}>
      <Input type="email" value={email} onChange={handleEmail} />
      <Rows>
        <Input type="text" value={firstname} onChange={handleFirstName} />
        <Input type="text" value={name} onChange={handleName} />
      </Rows>
      <Input type="tel" value={phone} onChange={handlePhone} />
      <Button type="submit">Valider</Button>
    </form>
  );
};

EditInformation.propTypes = {
  name: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

export default EditInformation;
