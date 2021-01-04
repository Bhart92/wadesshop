import React, { useState, Fragment } from 'react';
import { gsap } from "gsap";
import { slide as Menu } from 'react-burger-menu'
import HamburgerMenu from 'react-hamburger-menu';
import {isMobile} from 'react-device-detect';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

const MobileHeader = () => {
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
            {Array.from(document.querySelectorAll('.section')).length === 0 ? <Fragment>
                <Fragment>
                    <div className='header__mobile'>
                    <div className='header--logo-links__mobile'>
                    <Link to='/'><div className='header--logo__mobile'>
                            <i className="fab fa-cotton-bureau"></i>
                        </div></Link> 
                    </div> 
 
            <div className='mobile-header--burger-container'>
            <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={() => toggleMenu()}
                    width={30}
                    height={23}
                    strokeWidth={4}
                    rotate={0}
                    color='#f4f4f4'
                    borderRadius={0}
                    animationDuration={0.5}
                    className='burger-icon'
                />      
                <div>
                    <Menu
                        right
                        width={ '35%' }
                        isOpen={ isOpen }
                        customCrossIcon={ false }
                    >
                        <span className="menu-item"><Link to='/'>Home</Link></span>
                        <span className="menu-item"><Link to='/'>Artist</Link></span>
                        <span><Link to='/ourlabel'>Our Label</Link></span>
                        <span>Store</span>
                        <div className='header--social-links__mobile'>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-spotify"></i>
                        </div> 
                    </Menu>
                </div> 
            </div>
            </div>
                </Fragment>
            </Fragment> : <Fragment>
                <Fragment>
            <div className='header__mobile'>
            <div className='header--logo-links__mobile'>
            <Link to='/'><div className='header--logo__mobile'>
                            <i className="fab fa-cotton-bureau"></i>
                        </div></Link> 
                    </div>
 
            <div className='mobile-header--burger-container'>
            <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={() => toggleMenu()}
                    width={30}
                    height={23}
                    strokeWidth={4}
                    rotate={0}
                    color='#f4f4f4'
                    borderRadius={0}
                    animationDuration={0.5}
                    className='burger-icon'
                />      
                <div>
                    <Menu
                        right
                        width={ '35%' }
                        isOpen={ isOpen }
                        customCrossIcon={ false }
                    >
                        <span className="menu-item" onClick={() => { mobileScrollToSection('home-section') }}>Home</span>
                        <span className="menu-item" onClick={() => { mobileScrollToSection('artist-section') }}>Artist</span>
                        <span><Link to='/ourlabel'>Our Label</Link></span>
                        <span>Store</span>
                        <div className='header--social-links__mobile'>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-spotify"></i>
                        </div> 
                    </Menu>
                </div> 
            </div>
            </div>
        </Fragment>
                </Fragment>}
        </Fragment>
    )
}


export default MobileHeader;