import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg width='100' src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    let comms = comments.map((comm, i) => {
      let date = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(Date.parse(comm.date)));

      return (
        <ul key={comm.id} className='list-unstyled'>
          <li className='comment'>{comm.comment}</li>
          <li className='author'>
            -- {comm.author}, {date}
          </li>
        </ul>
      );
    });

    return (
      <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        <div>{comms}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetailComponent = (props) => {
  console.log('Dishdetail Component render invoked');

  if (props.dish != null) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetailComponent;
