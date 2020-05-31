import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
const MenuComponent = (props) => {
  const dishes = props.dishes;

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className='col-12 col-md-5 m-1'>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className='row'>{menu}</div>
    </div>
  );
};

export default MenuComponent;
