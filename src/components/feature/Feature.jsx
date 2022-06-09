import React from 'react';
import './feature.css';

const Feature = ({ title, text, img }) => {
    return (
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title .section__margin'><div />
                <h1>{title}</h1><div />
            </div>
            
            <div className='gpt3__features-container_feature-text'>
                <img src={img} alt="img" />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature