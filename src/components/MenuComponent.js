import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class MenuComponent extends Component {
  render() {
    const dishes = this.props.dishes;

    const menu = dishes.map((dish) => {
      return (
        <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      );
    });

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>{menu}</div>
        </div>
      </div>
    );
  }
}

export default MenuComponent;
