import React from 'react';
import './specs.css';

const Feature = () => {
    return (
        <div className='chevysonic__specs-container__feature' id='specs'>
            <div className='chevysonic__specs-container__feature-title .section__margin'><div />&nbsp;&nbsp;&nbsp;
                <h1>SPECIFICATIONS</h1>&nbsp;&nbsp;&nbsp;<div />
            </div>
            
            <div className='chevysonic__specs-container_feature-text'>
                <ul>
                    <li>Engine: 4-Cyl Turbo 1.4 Liter Ecotec</li>
                    <li>Transmission - 6 Speed automatic</li>
                    <li>Trim - 15-inch wheels</li>
                    <li>Class - Compact Passenger Car</li>
                    <li>Horsepower - 138 horse-power @6300 rpm</li>
                </ul>
                <ul>
                    <li>Standard L/KM - City - 9.3L/100 km, Hwy – 7.0 L/100 km</li>
                    <li>Body Style - hatchback</li>
                    <li>Drivetrain - front-wheel-drive</li>
                    <li>Fuel Type - Regular</li>
                    <li>Seating Capacity (Max) – 5 person</li>
                </ul>
            </div>
        </div>
    )
}

export default Feature