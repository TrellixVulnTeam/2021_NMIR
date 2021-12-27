import React from 'react';
import { Feature } from '../../components';
import './What.css';
import { featureData } from './featureData';

const What = () => {
    return (
        <div id='what' className='what section__margin'>
            <div className='what__feature'>
                <Feature title={featureData[0].title} text={featureData[0].text} />
            </div>
            <div className='what__heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='what__container'>
                <Feature title={featureData[1].title} text={featureData[1].text} />
                <Feature title={featureData[2].title} text={featureData[2].text} />
                <Feature title={featureData[3].title} text={featureData[3].text} />
            </div>
        </div>
    )
}

export default What