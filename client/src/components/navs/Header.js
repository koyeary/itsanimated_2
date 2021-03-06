import React, { Fragment } from 'react';
import MainNav from './MainNav';

const Header = () => {
  return (
    <Fragment>
      <div className='jumbotron my-0'>
        <h1 className='display-4'>Hello, world!</h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </div>
      <MainNav className="mt-0" />
    </Fragment>
  );
};

export default Header;
