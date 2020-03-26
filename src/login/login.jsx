import React from 'react';
import Input from '@cda/input';
import Button from '@cda/button';
import { Rows, Item } from '@cda/flex';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

const CustomRows = styled(Rows)`
  height: 100vh;
`;

export default () => (
  <CustomRows justifyContent="center" alignItems="center">
    <Item>
      <h2>Login</h2>
      <Input type="text" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Button>Valider</Button>
      <Link to="/signup">Pas encore de compte</Link>
    </Item>
  </CustomRows>
);
