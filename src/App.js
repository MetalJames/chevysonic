import React from 'react';
import './App.css';
import Navbar from './containers/navbar/Navbar';
import ChevySonic from './containers/chevy_sonic/ChevySonic';
import Footer from './containers/footer/Footer';

const App = () => {
    return (
        <>
            <div className='App'>
                <Navbar />
                <ChevySonic />
                <Footer />
            </div>
        </>
    )
}

export default App;