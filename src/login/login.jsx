import React from 'react';
import Input from '@cda/input';
import Button from '@cda/button';

export default () => (
  <div>
    <Input type="text" placeholder="email" />
    <Input type="password" placeholder="password" />
    <Button>Valider</Button>
  </div>
);
