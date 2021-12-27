import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => {
    return (
        <div className='features__container-feature'>
            <div className='features__container-feature_title'>
                <div />
                <h1>{title}</h1>
            </div>
            <div className='features__container-feature_text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature