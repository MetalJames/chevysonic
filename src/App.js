import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ChevySonic from './containers/chevy_sonic/ChevySonic';

const App = () => {
    return (
        <>
            <Navbar />
            <ChevySonic />
        </>
    )
}

export default App;