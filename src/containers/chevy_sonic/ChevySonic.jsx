import React, {useState} from 'react';
import { Box } from '@mui/material';
import './chevy_sonic.css';
import { Dimentions, Engine, BasicModalImg, ImageCollage, Feature, Specs, YoutubeEmbed } from '../../components';
import new_feature_img from '../../assets/new_feature_img.jpg';
import engine from '../../assets/engine.jpeg';
import featureimage from '../../assets/featureimage.jpg';
import Sonic2018LT from '../../assets/facing_gallery_sonic.png';

const ChevySonic = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className='chevysonic' id='home'>
        <img className='featureImage' src={featureimage} alt="sonic 2018lt" />
            <div className='chevysonic-heading'>
                <h1>Chevrolet Sonic 2018 LT Hatchback</h1>
            </div>
            <div className='chevysonic-container'>
                <Feature title='NEW STYLE AND NEW FEATURES' text='New sonic 2018 lt hatchback made in the way you will like it. Many new features like: heated seats, sunroof, spoiler at the back, toned windows, make this car look really awesome. A small car was never looked better, and you will be surprised by how fast and maneuverable this car can be.' img={new_feature_img} />
                <Engine title='ENGINE AND PERFORMANCES' text='The Ecotec engine family is great - the best combination of economy, power, refinement, and reliability. 1.4L “Ecotec” turbo engine is a fuel-efficient engine with 138 horsepower and 6300 rpm. Thanks to that it makes this car low on gas with City - 9.3 L/100 km and Hwy – 7.0 L/100 km what makes 8.0 L/100 km for daily use.' img={engine} />
                <Specs />
                <Dimentions />
                <div className='chevysonic__gallery_h1'><div />&nbsp;&nbsp;&nbsp;
                    <h1>GALLERY</h1>&nbsp;&nbsp;&nbsp;<div />
                </div>
                <div className='chevysonic-container-gallery' id='gallery'>
                <Box component='img' sx={{width: {xl: '60%', lg: '59%', md: '93%', sm: '92%', xs: '100%'}, height: 'auto', 
                                            marginTop: {xl: '0', lg: '0', md: '-2rem', sm: '2rem', xs: '-5rem'},
                                            marginBottom: {sm: '0rem', xs: '-12rem'},}} 
                    src={Sonic2018LT} alt="test sonic"
                />
                    <ImageCollage setSelectedImg={setSelectedImg}/>
                </div>
                { selectedImg &&  <BasicModalImg selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
                <YoutubeEmbed embedId="IlVHUKYBwRI" />
            </div>
        </div>
    )
}

export default ChevySonic