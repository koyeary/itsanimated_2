import React, { Fragment}  from 'react';
import ProductForm from './components/Table/buttons/Add';
import TableBody from './components/Table/TableBody';

import { Row, Col, Container } from 'react-bootstrap';


const Dashboard = () => {

  return (
    <Fragment>
      <Row>
        <h1 className='display-2 m-5 pl-5 Dashboard-display'>Dashboard</h1>
      </Row>
      <Container className='my-4'>
        <Row>
          <TableBody/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
