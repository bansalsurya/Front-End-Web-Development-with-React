import React, { Fragment } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderDish({ dish }) {
  //console.log('render dish');
  if (dish != null)
    return (
      <Fragment>
        <div className='col-12 col-md-5 m-1'>
          <Card className='card-style'>
            <CardImg top key={dish.id} src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        <div className='col-12 col-md-5 m-1'>
          <h4>Comments</h4>
          <RenderComments comments={dish.comments} />
        </div>
      </Fragment>
    );
  else return <div></div>;
}
function RenderComments({ comments }) {
  //console.log('render comments');
  if (comments != null) {
    const comment = comments.map((item) => {
      //const date = this.styledDate(item.date);
      return (
        <div key={item.id}>
          <li>{item.comment}</li>
          <br />
          <li>
            --{item.author},{' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }).format(new Date(Date.parse(item.date)))}
          </li>
          <br />
        </div>
      );
    });

    return <ul className='list-unstyled'>{comment}</ul>;
  } else return <div></div>;
}

//  styledDate = (date) => {
//   const option = { year: 'numeric', month: 'short', day: 'numeric' };
//   const changedate = new Date(date);
//   const newdate = changedate.toLocaleDateString('en-US', option);
//   return newdate;
// };
const DishdetailComponent = (props) => {
  //console.log('render dishdetail component');
  const { dishprop } = props;
  return (
    <div className='container'>
      <div className='row'>
        <RenderDish dish={dishprop} />
      </div>
    </div>
  );
};

export default DishdetailComponent;
