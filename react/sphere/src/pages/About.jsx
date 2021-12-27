import React from 'react'
import s from '../scss/About.module.scss'
import Sphere from '../components/Sphere/Sphere'
import nSphere  from '../assets/images/n-sphere.png'
import sphericalCS from '../assets/images/spherical-cs.png'
import sphericalWedge from '../assets/images/spherical-wedge.png';

const About = () => {

    return (
        <div className={[s.about, 'section'].join(' ')}>

            <div className={s.sides}>
                <div className={s.left}>
                    <h3>A sphere is a geometrical object</h3>
                    <p>
                        Like a circle in a two-dimensional space, a sphere is defined mathematically as the set of points 
                        that are all at the same distance r from a given point in a three-dimensional space.
                    </p>
                    <span>
                        While outside mathematics the terms "sphere" and "ball" are sometimes used interchangeably, in mathematics 
                        the above distinction is made between a sphere.
                    </span>
                </div>
                <div className={s.right}>
                    <Sphere color={'#fff'} />
                </div>
            </div>

            <div className={s.features}>
                <h2>Features</h2>
                <div className={s.container}>
                    <div>
                        <img src={nSphere} alt="n-sphere" />
                        <h6>N-Sphere</h6>
                        <p>In mathematics, an n-sphere is a topological space that is homeomorphic to a standard n-sphere</p>
                    </div>
                    <div>
                        <img src={sphericalWedge} alt="spherical-wedge" />
                        <h6>Spherical wedge</h6>
                        <p>In geometry, a spherical wedge or ungula is a portion of a ball bounded by two plane semidisks and a spherical lune.</p>
                    </div>
                    <div>
                        <img src={sphericalCS} alt="coordinate-system" />
                        <h6>Coordinate system</h6>
                        <p>In mathematics, a spherical coordinate system is a coordinate system for three-dimensional space where the position of a point is specified by three numbers</p>
                    </div>
                </div>
            </div>

            <div className={s.newsletter}>
                <h3>Subscribe there</h3>
                <form action>
                    <input  type='email' placeholder='Enter your email' />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default About
