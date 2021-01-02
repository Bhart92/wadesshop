import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = () => {
    return (
        <Fragment>
            <div className='header'>
                    <div className='header--logo-links'>
                        <div className='header--logo'>
                            <i class="fab fa-cotton-bureau"></i>
                        </div>
                        <div className='header--main-links'>
                            <span>Home</span>
                            <span>Artists</span>
                            <span>Our Label</span>
                            <span>Store</span>
                        </div>
                    </div>
                    <div className='header--social-links'>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-spotify"></i>
                    </div>          
            </div>
        </Fragment>
    )
}


export default Header;