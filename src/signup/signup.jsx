import React, { useCallback } from 'react';
import Input from '@cda/input';
import Button from '@cda/button';
import { Rows, Item } from '@cda/flex';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from './signup.actions';
import useInput from '../hooks/useInput';

const CustomRows = styled(Rows)`
  height: 100vh;
`;

export default () => {
  const [firstname, handleFirstname] = useInput('');
  const [name, handleName] = useInput('');
  const [email, handleEmail] = useInput('');
  const [phone, handlePhone] = useInput('');
  const [password, handlePassword] = useInput('');
  const [confirm, handleConfirm] = useInput('');
  const [gender, handleGender] = useInput('male');
  const dispatch = useDispatch();
  const message = useSelector(({ signup }) => signup.error);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(signup({
      firstname,
      name,
      email,
      phone,
      password,
      confirm,
      gender,
    }));
  }, [firstname, name, email, phone, password, confirm, gender]);

  return (
    <CustomRows justifyContent="center" alignItems="center">
      <Item>
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <label>
            <Input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGender} />
            Homme
          </label>
          <label>
            <Input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGender} />
            Femme
          </label>
          <Input type="text" placeholder="Prénom" value={firstname} onChange={handleFirstname} />
          <Input type="text" placeholder="Nom" value={name} onChange={handleName} />
          <Input type="email" placeholder="Adresse email" value={email} onChange={handleEmail} />
          <Input type="tel" placeholder="Numéro de téléphone" value={phone} onChange={handlePhone} />
          <Input type="password" placeholder="Mot de passe" value={password} onChange={handlePassword} />
          <Input type="password" placeholder="Confirmation du mot de passe" value={confirm} onChange={handleConfirm} />
          <Button>Valider</Button>{message}
        </form>
      </Item>
    </CustomRows>
  );
};
