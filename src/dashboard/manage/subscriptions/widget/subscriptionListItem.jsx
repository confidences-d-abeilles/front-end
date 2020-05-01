import React from 'react';
import Card from '../../../../components/card';
import { Link } from '@reach/router';
import { Rows } from '@cda/flex/src';

const Item = ({ id, product }) => {


  return (
    <Card>
      <Rows justifyContent="space-between">
        {product.name}
        <div>
          <Link to={id.toString()}>
            <span role="img" aria-label="wrench">🔧</span>
          </Link>
        </div>
      </Rows>
    </Card>
  );
};

export default Item;
