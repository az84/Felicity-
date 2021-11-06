import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

export const ShopAll = () => (
  <Container>
        <div>
            <img src={require('./../assets/images/ShopAll.png')} width="100%" height="100%" alt="Shop All in retro style" />
        </div>
      <ProductList />
  </Container>     
)