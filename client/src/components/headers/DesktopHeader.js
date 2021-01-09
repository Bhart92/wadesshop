import React, { Fragment } from 'react';
import { gsap } from "gsap";
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
                        <Link to='/'><div className='header--logo'>
                            <i className="fab fa-cotton-bureau"></i>
                        </div></Link>
                        <div className='header--main-links'>
                            <span onClick={() => { scrollToSection('home-section') }}>Home</span>
                            <span onClick={() => { scrollToSection('artist-section') }}>Playlists</span>
                            <span><Link to='/ourlabel'>Our Label</Link></span>
                            <span><Link to='/store'>Store</Link></span>
                        </div>
                    </div>
                    <div className='header--social-links'>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-spotify"></i>
                    </div>          
            </div>
        </Fragment>
    )
}


export default DesktopHeader;