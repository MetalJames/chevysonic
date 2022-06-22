import React from 'react';
import './chevy_sonic.css';
import Feature from '../../components/new_feature/Feature';
import Engine from '../../components/engine/Engine';
import Specs from '../../components/specs/Specs';
import new_feature_img from '../../assets/new_feature_img.jpg';
import engine from '../../assets/engine.jpeg';
// import specs from '../../assets/specs.jpeg';

const ChevySonic = () => {
    return (
        <div className='chevysonic section__margin' id='home'>
            <div className='chevysonic-heading'>
                <h1>Chevrolet Sonic 2018 LT Hatchback</h1>
            </div>
            <div className='chevysonic-container'>
                <Feature title='NEW STYLE AND NEW FEATURES' text='New sonic 2018 lt hatchback made in the way you will like it. Many new features like: heated seats, sunroof, spoiler at the back, toned windows, make this car look really awesome. A small car was never looked better, and you will be surprised by how fast and maneuverable this car can be.' img={new_feature_img} />
                <Engine title='ENGINE AND PERFORMANCES' text='The Ecotec engine family is great - the best combination of economy, power, refinement, and reliability. 1.4L “Ecotec” turbo engine is a fuel-efficient engine with 138 horsepower and 6300 rpm. Thanks to that it makes this car low on gas with City - 9.3 L/100 km and Hwy – 7.0 L/100 km what makes 8.0 L/100 km for daily use.' img={engine} />
                <Specs />
                {/* <Feature title='SPECIFICATIONS' text='Engine: 4-Cyl Turbo 1.4 Liter Ecotec
                                                        Transmission - 6 Speed automatic
                                                        Trim - 15-inch wheels
                                                        Class - Compact Passenger Car
                                                        Horsepower - 138 horse-power
                                                        @6300 rpm
                                                        Standard L/KM - City - 9.3
                                                        L/100 km, Hwy – 7.0 L/100 km
                                                        Body Style - hatchback
                                                        Drivetrain - front-wheel-drive
                                                        Fuel Type - Regular
                                                        Seating Capacity (Max) –
                                                        5 person' img={specs} /> */}
            </div>
        </div>
    )
}

export default ChevySonic