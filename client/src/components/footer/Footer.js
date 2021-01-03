import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <Fragment>
            <div className='footer'>
                <div className='footer--icons'>
                <div className='footer--logo'>
                    <i class="fab fa-cotton-bureau"></i>
                </div>
                 <div className='footer--extra-icons'>
                 <i class="fas fa-microphone-alt"></i>
                 <i class="fas fa-tshirt"></i>
                 <i class="fas fa-gem"></i>
                 <i class="fas fa-record-vinyl"></i>
                 </div>
                </div>
            <div className='footer--bottom'>
                &copy; All rights reserved
            </div>
            </div>
        </Fragment>
    )
}

export default Footer;