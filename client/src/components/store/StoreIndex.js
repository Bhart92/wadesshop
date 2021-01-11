import React, { Fragment } from 'react';
import LinksHeader from '../headers/LinksHeader';
import ProductDisplay from '../store/ProductDisplay';
import Footer from '../footer/Footer';
// import PropTypes from 'prop-types';

const StoreIndex = () => {

    return (
        <Fragment>
            <Fragment>
                <LinksHeader />
            </Fragment>
            <div className='store-container'>
                <h1>Store Name</h1>
                <div className='store-logo'>
                    <i className="fab fa-cotton-bureau"></i>
                </div>
                <Fragment>
                    <ProductDisplay />
                </Fragment>
            </div>
            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}

export default StoreIndex;