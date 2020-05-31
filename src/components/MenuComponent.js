import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}
const MenuComponent = (props) => {
  const dishes = props.dishes;

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className='col-12 col-md-5 m-1'>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>{menu}</div>
    </div>
  );
};

export default MenuComponent;
