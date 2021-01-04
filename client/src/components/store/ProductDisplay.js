import React, { useState, Fragment } from 'react';
import LinksHeader from '../headers/LinksHeader';
import PropTypes from 'prop-types';

const ProductDisplay = () => {
    const storeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <Fragment>
            <div className='product-container'>
                <div className='product--filter-bar'>
                    <h2>Filter</h2>
                    <div className='filter-bar--clothes'>
                        <h3>Clothes</h3>
                        <ul>
                            <li>Shirts</li>
                            <li>Pants</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className='filter-bar--jewlery'>
                    <h3>jewlery</h3>
                    <ul>
                            <li>Necklaces</li>
                            <li>Rings</li>
                            <li>Watches</li>
                        </ul>
                    </div>

                </div>
                <div className='product--item-list'>
                    <div className='product--pagination-container'>
                        <div className='pagination--page-num'> <span>1 of 3 | 1 2 3 4 5</span></div>
                    </div>
                    <div className='product--cards'>
                        {storeData.map((card) => {
                            return (
                                <div className='product--card'>
                                    <div className='product-image'></div>
                                    <div className='product-title'><h2>T Shirt</h2><span>Sub-Title</span></div>
                                    <div className='product-price'><span>$25.99</span><button>Add to Cart</button></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='product--pagination-container'>
                        <div className='pagination--page-num'> <span>1 of 3 | 1 2 3 4 5</span></div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default ProductDisplay;