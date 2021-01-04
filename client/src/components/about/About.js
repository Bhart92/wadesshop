import React, {Fragment} from 'react';
import LinksHeader from '../headers/LinksHeader';


const About = () => {
  return (
      <Fragment>
            <Fragment>
                <LinksHeader />
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