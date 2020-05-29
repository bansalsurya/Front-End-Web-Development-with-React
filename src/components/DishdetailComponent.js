import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DishdetailComponent extends Component {
  renderDish = (dish) => {
    if (dish != null)
      return (
        <Fragment>
          <div className='col-12 col-md-5 m-1'>
            <Card key={dish.id} className='card-style'>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>

          <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
          </div>
        </Fragment>
      );
    else return <div></div>;
  };
  renderComments = (comments) => {
    if (comments != null) {
      const comment = comments.map((item) => {
        const date = this.styledDate(item.date);
        return (
          <div>
            <li>{item.comment}</li>
            <br />
            <li>
              --{item.author}, {date}
            </li>
            <br />
          </div>
        );
      });

      return <ul className='list-unstyled'>{comment}</ul>;
    } else return <div></div>;
  };

  styledDate = (date) => {
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    const changedate = new Date(date);
    const newdate = changedate.toLocaleDateString('en-US', option);
    return newdate;
  };

  render() {
    const { selectedDish } = this.props;

    return (
      <div className='container'>
        <div className='row'>{this.renderDish(selectedDish)}</div>
      </div>
    );
  }
}

export default DishdetailComponent;
