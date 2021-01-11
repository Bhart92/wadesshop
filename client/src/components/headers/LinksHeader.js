import React, { Fragment } from 'react';
import { gsap } from "gsap";
import {isMobile, isTablet, isBrowser} from 'react-device-detect';
import MobileHeader from './MobileHeader';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

const LinksHeader = () => {
    // const [ isOpen, setIsOpen ] = useState(false);
    // const toggleMenu = () => {
    //     // document.querySelector('body').classList.toggle('body-overflow');
    //     setIsOpen(!isOpen);
    // };

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
                                                <i className="fab fa-cotton-bureau"></i>
                                            </div>
                                            <div className='header--main-links'>
                                                <span><Link to='/'>Home</Link></span>
                                                <span><Link to='/'>Playlists</Link></span>
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
            </Fragment>
    )
}


export default LinksHeader;