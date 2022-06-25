import React from 'react';
import './App.css';
import Navbar from './containers/navbar/Navbar';
import ChevySonic from './containers/chevy_sonic/ChevySonic';
import Footer from './containers/footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <ChevySonic />
            <Footer />
        </>
    )
}

export default App;