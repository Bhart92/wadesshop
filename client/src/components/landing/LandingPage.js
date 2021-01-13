import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackgroundSlider from 'react-background-slider'
import SocialMedia from '../footer/SocialMedia';
import Footer from '../footer/Footer';
import DesktopHeader from '../headers/DesktopHeader';
import MobileHeader from '../headers/MobileHeader';
import { GetAllProducts } from '../../actions/shopify';
import {isMobile, isTablet, isBrowser} from 'react-device-detect';
import ArtistPreview from '../artists/ArtistPreview';

const LandingPage = ({GetAllProducts, products}) => {
    useEffect(() => {
        if(products.length === 0) GetAllProducts();
    }, [GetAllProducts]);
    return (
        <Fragment>
        <Fragment>
            {isMobile && <MobileHeader />}
            {isTablet && <MobileHeader />}
            {isBrowser && (
            <Fragment>
                <DesktopHeader />
            </Fragment>)
                }

            </Fragment>
        <Fragment>
            <section id='home-section' className='landing--container section'>
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
            <section className='image--filler-section' style={{background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('solo.jpg')`}}></section>
            <section className='social-media--section'>
                <SocialMedia />
            </section>
            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
        </Fragment>
    )
}
LandingPage.propTypes = {
    GetAllProducts: PropTypes.func.isRequired
  };
  
const mapStateToProps = state => ({
    products: state.products
  });
export default connect(mapStateToProps, {GetAllProducts})(LandingPage);