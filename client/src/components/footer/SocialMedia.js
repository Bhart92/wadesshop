import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

const SocialMedia = () => {
    return (
        <Fragment>
            <div className='social-media--links'>
                    <h1>Follow Us</h1>
                    <div className='footer--social-links'>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-spotify"></i>
                    </div>   
            </div>
        </Fragment>
    )
}

export default SocialMedia;