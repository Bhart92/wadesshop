import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BackgroundSlider from 'react-background-slider'
import Header from './Header';
import SocialMedia from '../footer/SocialMedia';
import Footer from '../footer/Footer';

import ArtistPreview from '../artists/ArtistPreview';
import { Link, Redirect } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Fragment>
            <section id='home-section' className='landing--container section'>
                <Header />
                <div className='container'>
                <div className='landing--hero'>
                    <span>Trending</span>
                    <h1>This is filler text. This is filler text. This is filler text. This is filler text.
                    This is filler text.
                    </h1>
                </div>
                <BackgroundSlider
                    images={['1.jpg', '2.jpg', '3.jpg', '4.jpg']}
                    duration={10} transition={2} />
                </div>
            </section>


            <section id='artist-section' className='artists--playlist-preview--container section'>
                <ArtistPreview />
            </section>
            <section className='image--filler-section' style={{background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('solo.jpg')`}}>

            


            </section>
            <section className='social-media--section'>
                <SocialMedia />
            </section>
            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}


export default LandingPage;