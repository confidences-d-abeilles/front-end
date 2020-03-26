import React from 'react';
import Input from '@cda/input';
import Button from '@cda/button';
import { Rows, Item } from '@cda/flex';
import styled from '@emotion/styled';

const CustomRows = styled(Rows)`
  height: 100vh;
`;

export default () => (
  <CustomRows justifyContent="center" alignItems="center">
    <Item>
      <h2>Signup</h2>
      <Input type="text" placeholder="Prénom" />
      <Input type="text" placeholder="Nom" />
      <Input type="email" placeholder="Adresse email" />
      <Input type="tel" placeholder="Numéro de téléphone" />
      <Input type="password" placeholder="Mot de passe" />
      <Input type="password" placeholder="Confirmation du mot de passe" />
      <Button>Valider</Button>
    </Item>
  </CustomRows>
);
