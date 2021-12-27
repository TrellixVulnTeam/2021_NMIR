import React from 'react'
import s from '../scss/Home.module.scss';
import Particles from "react-tsparticles";
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import options from '../options/particles-options';

const Home = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <div className={[s.home, 'section'].join(' ')}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <Slide bottom>
                <Link to='/about' className={s.inner}>
                    <h1>Sphere Here</h1>
                </Link>
            </Slide>
        </div>
    )
}

export default Home
