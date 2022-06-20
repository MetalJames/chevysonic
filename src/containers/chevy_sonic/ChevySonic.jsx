import React from 'react';
import './chevy_sonic.css';
import Feature from '../../components/feature/Feature';
import logo from '../../assets/new.jpg'

const ChevySonic = () => {
    return (
        <div className='chevysonic section__margin' id='home'>
            <div className='chevysonic-heading'>
                <h1>Chevrolet Sonic 2018 LT Hatchback</h1>
            </div>
            <div className='chevysonic-container'>
                <Feature title='NEW STYLE AND NEW FEATURES' text='New sonic 2018 lt hatchback made in the way you will like it. Many new features like: heated seats, sunroof, spoiler at the back, toned windows, make this car look really awesome. A small car was never looked better, and you will be surprised by how fast and maneuverable this car can be.' img={logo} />
                <Feature title='NEW STYLE AND NEW FEATURES' text='New sonic 2018 lt hatchback made in the way you will like it. Many new features like: heated seats, sunroof, spoiler at the back, toned windows, make this car look really awesome. A small car was never looked better, and you will be surprised by how fast and maneuverable this car can be.' img={logo} />
                <Feature title='NEW STYLE AND NEW FEATURES' text='New sonic 2018 lt hatchback made in the way you will like it. Many new features like: heated seats, sunroof, spoiler at the back, toned windows, make this car look really awesome. A small car was never looked better, and you will be surprised by how fast and maneuverable this car can be.' img={logo} />
            </div>
        </div>
    )
}

export default ChevySonic