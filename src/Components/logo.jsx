import React from 'react';
import './logo.css';
import image from './network-1.svg';

export default function logo() {
    return (
        <>
            <div className='image'>
                <img src={image}></img>
            </div>
            <div className='logoText'>
                <h1>
                    EmployeeHub
                </h1>
            </div>
        </>
    );
};
