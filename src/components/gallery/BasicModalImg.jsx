import * as React from 'react';

const style = {
    position: 'fixed',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    zIndex: '100',
};

const styleImg = {
    position: 'fixed',
    top: '86%',
    left: '50%',
    maxWidth: '73%',
    maxHeight: '75%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const styleImgMobile = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxWidth: '95%',
    maxHeight: '80%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModalImg({selectedImg, setSelectedImg}) {
    const isMobile = window.innerWidth <= 500;

    const handleClick = (e) => {
        if (e.target.classList.contains('close')) {
        setSelectedImg(null);
        }
    }

    return (
        <div className='close' style={style} onClick={handleClick}>
            {isMobile ? <img style={styleImgMobile} src={selectedImg} alt='' /> : <img style={styleImg} src={selectedImg} alt='' />}
        </div>
    );
}