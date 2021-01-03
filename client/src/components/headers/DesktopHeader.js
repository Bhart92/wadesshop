import React, { Fragment } from 'react';
import { gsap } from "gsap";
import {isMobile} from 'react-device-detect';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

const DesktopHeader = () => {
    const scrollToSection = (string) => {
		const sections = Array.from(document.querySelectorAll('.section'));
		return gsap.to(window, {duration: 1.25, scrollTo: `#${sections.filter((section, i) => section.id === string)[0].id}`});
	};
    return (
        <Fragment>
            <div className='header'>
                    <div className='header--logo-links'>
                        <div className='header--logo'>
                            <i onClick={() => { scrollToSection('home-section') }} class="fab fa-cotton-bureau"></i>
                        </div>
                        <div className='header--main-links'>
                            <span onClick={() => { scrollToSection('home-section') }}>Home</span>
                            <span onClick={() => { scrollToSection('artist-section') }}>Playlists</span>
                            <span><Link to='/ourlabel'>Our Label</Link></span>
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


export default DesktopHeader;