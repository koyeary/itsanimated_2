import React, { Fragment } from 'react';

const Details = ({ name, price }) => {
    return (
        <Fragment>
            <h4 className='Product__title'>{name}</h4>
                <p className='Product__price'>${price}</p>
        </Fragment>
    )
}

export default Details;