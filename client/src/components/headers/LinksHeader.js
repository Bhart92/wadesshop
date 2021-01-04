import React, { useState, Fragment } from 'react';
import { gsap } from "gsap";
import {isMobile, isTablet, isBrowser} from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu'
import HamburgerMenu from 'react-hamburger-menu';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

const LinksHeader = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleMenu = () => {
        // document.querySelector('body').classList.toggle('body-overflow');
        setIsOpen(!isOpen);
    };
	const mobileScrollToSection = (string) => {
        const sections = Array.from(document.querySelectorAll('.section'));
        if(isOpen === false){
            return gsap.to(window, {duration: 1.25, scrollTo: `#${sections.filter((section, i) => section.id === string)[0].id}`});
        } else{
            toggleMenu();
            sections.map((section) => {
                if(section.id !== undefined){
                    return gsap.to(window, {duration: 1.25, scrollTo: `#${sections.filter((section, i) => section.id === string)[0].id}`});
                }
            })
            
        }
    };

    return (
            <Fragment>
                {isMobile && 
                    (
                        <MobileHeader />
                    )
                }

                {isTablet && 
                    (
                        <MobileHeader />
                    )
                }

                {isBrowser && 
                    (
                        <Fragment>
                                <div className='header'>
                                        <div className='header--logo-links'>
                                            <div className='header--logo'>
                                                <i class="fab fa-cotton-bureau"></i>
                                            </div>
                                            <div className='header--main-links'>
                                                <span><Link to='/'>Home</Link></span>
                                                <span><Link to='/'>Playlists</Link></span>
                                                <span><Link to='/ourlabel'>Our Label</Link></span>
                                                <span><Link to='/store'>Store</Link></span>
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
            </Fragment>
    )
}


export default LinksHeader;