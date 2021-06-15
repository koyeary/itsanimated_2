import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';
import { Row, Col, Container } from 'react-bootstrap';

import { connect } from 'react-redux';
import TableBody from './components/Table/TableBody';

const Dashboard = () => {

  return (
    <Fragment>
      <Row>
        <h1 className='display-2 m-5 pl-5 Dashboard-display'>Dashboard</h1>
      </Row>
      <Container className='my-4'>
        <Row>
          <Col className='text-center' md={3}></Col>
          <Col md={9}>
            <TableBody/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
