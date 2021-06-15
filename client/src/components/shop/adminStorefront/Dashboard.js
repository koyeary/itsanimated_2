import React, { Fragment}  from 'react';
import { Link } from 'react-router-dom';

import { Row, Container } from 'react-bootstrap';


const Dashboard = () => {

  return (
    <Fragment>
      <Row>
        <h1 className='display-2 m-5 pl-5 Dashboard-display'>Dashboard</h1>
      </Row>
      <Container className='my-4'>
        <Row>
          <Link to='/inventory'>Inventory</Link>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
