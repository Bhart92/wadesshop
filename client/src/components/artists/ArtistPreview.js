import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ArtistPreview = () => {
    const artists = [
        {
            title: 'Essentials',
            image: 'artistCard1.jpg'
        },
        {
            title: 'New',
            image: 'artistCard2.jpg'
        },
        {
            title: 'Hip Hop',
            image: 'artistCard3.jpg'
        }];
    return (
        <Fragment>
            <div className='artists--playlist-preview'>
                    <h1>Playlists</h1>
                 <div className='artists--card-container'>
                     {artists.map((artist) => {
                         return (
                            <div className='artist--card-wrapper'>
                                <h2>Get In the Know</h2>
                                <span>{artist.title}</span>
                                    <div className='artists--card' style={{ backgroundImage: `url('${artist.image}')` }}></div>
                            </div>
                         );
                     })}
                </div>
            </div>
        </Fragment>
    )
}


export default ArtistPreview;