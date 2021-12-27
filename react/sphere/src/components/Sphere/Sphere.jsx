import React from 'react'
import s from './Sphere.module.scss';

const Sphere = ({ size, color }) => {
    return (
        <div 
            style={{
                width: `${size}px`, 
                height: `${size}px`, 
                backgroundColor: `${color}`
            }} 
            className={s.sphere}
        >
        </div>
    )
}

export default Sphere
