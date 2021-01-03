import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
      <Fragment>
        <Fragment>
                <div className='header'>
                        <div className='header--logo-links'>
                            <div className='header--logo'>
                                <i class="fab fa-cotton-bureau"></i>
                            </div>
                            <div className='header--main-links'>
                                <span><Link to='/'>Home</Link></span>
                                <span><Link to='/'>Playlists</Link></span>
                                <span><Link to='/ourlabel' />Our Label</span>
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
        <Fragment>
            <div className='about--section'>
                <div className='about--description'>
                <h1>Our Label</h1>
                <span>Another world star stuff harvesting star light brain is the seed of intelligence intelligent beings rings of Uranus worldlets. 
                    Two ghostly white figures in coveralls and helmets are softly dancing as a patch of light descended from astronomers vanquish the impossible 
                    explorations globular star cluster. Gathered by gravity something incredible is waiting to be known rich in heavy atoms paroxysm of global death 
                    network of wormholes encyclopaedia galactica and billions upon billions upon billions upon billions upon billions upon billions upon billions.</span>
                </div>
                <div className='about--image' style={{background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url('studio.jpg')`}}></div>
            </div>
        </Fragment>
      </Fragment>


  );
};

export default About;