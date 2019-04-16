import React from 'react';
import SpinImage from "./SpinImage";
import logo from './logo.svg';

const Callback = () => (
    <div className='App-header'>
        <SpinImage image={logo} />
        <h1>
            Loading...
        </h1>
    </div>
);

export default Callback;
