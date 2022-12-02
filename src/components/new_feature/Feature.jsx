import React from 'react';
import './feature.css';

const Feature = ({ title, text, img }) => {
    return (
        <div className='chevysonic__features-container__feature' id='chevy'>
            <div className='chevysonic__features-container__feature-title .section__margin'><div />&nbsp;&nbsp;&nbsp;
                <h1>{title}</h1>&nbsp;&nbsp;&nbsp;<div />
            </div>
            
            <div className='chevysonic__features-container_feature-text'>
                <img src={img} alt="img" />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature