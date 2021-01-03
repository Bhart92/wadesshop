import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SocialMedia = () => {
    return (
        <Fragment>
            <div className='social-media--links'>
                    <h1>Follow Us</h1>
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

export default SocialMedia;