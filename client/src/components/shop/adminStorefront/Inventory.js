import React, { Fragment } from 'react';
import Add from './components/Table/adminButtons/Add';
import TableBody from './components/Table/TableBody';

import { Row, Col, Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Fragment>
      <Row>
          <h1 className='display-2 m-5 pl-5'>Inventory{'  '}<Add/></h1>
      </Row>
      <Container className='my-4'>
        <Row>
          <TableBody />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
