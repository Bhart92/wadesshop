import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ArtistPreview = () => {
    return (
        <Fragment>
            <div className='artists--playlist-preview'>
                    <h1>Playlists</h1>
                <div className='artists--card-container'>
                    <div className='artist--card-wrapper'>
                                    <h2>Get In the Know</h2>
                                    <span>Essentials</span>
                                        <div className='artists--card first' ></div>
                    </div>
                    <div className='artist--card-wrapper'>
                                    <h2>Get In the Know</h2>
                                    <span>New</span>
                    <div className='artists--card second' ></div>
                    </div>
                    <div className='artist--card-wrapper'>
                                    <h2>Get In the Know</h2>
                                    <span>Hip Hop</span>
                    <div className='artists--card third' ></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default ArtistPreview;