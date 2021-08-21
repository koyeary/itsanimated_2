import React, { Fragment } from 'react';

const Image = ({ image }) => {
  return (
    <Fragment>
      <img
        class='card-img-top'
        /* src={image} */
        src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
        alt='...'
      />
    </Fragment>
  );
};

export default Image;
