import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <Fragment>
            <div className='footer'>
                <div className='footer--icons'>
                <div className='footer--logo'>
                    <i className="fab fa-cotton-bureau"></i>
                </div>
                 <div className='footer--extra-icons'>
                 <i className="fas fa-microphone-alt"></i>
                 <i className="fas fa-tshirt"></i>
                 <i className="fas fa-gem"></i>
                 <i className="fas fa-record-vinyl"></i>
                 </div>
                 <span>Serving the community for over 15 years</span>
                </div>
            <div className='footer--bottom'>
                &copy; All rights reserved
            </div>
            </div>
        </Fragment>
    )
}

export default Footer;