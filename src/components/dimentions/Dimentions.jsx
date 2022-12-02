import React from 'react';
import chevysonic_dimentions from '../../assets/chevysonic_dimentions.svg';
import './dimentions.css';

const Dimentions = () => {
    return (
        <div className='chevysonic__dimentions-container__feature' id='dimentions'>
            <div className='chevysonic__dimentions-container__feature-title .section__margin'><div />&nbsp;&nbsp;&nbsp;
                <h1>DIMENTIONS</h1>&nbsp;&nbsp;&nbsp;<div />
            </div>
            <img src={chevysonic_dimentions} alt='chevy sonic dimentions' />
        </div>
    )
}

export default Dimentions