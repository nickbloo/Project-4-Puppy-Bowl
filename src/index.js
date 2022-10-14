import React from 'react';
import ReactDOM from 'react-dom';
import PuppyComponent from './components/Puppy';

const appElement = document.getElementById("app");

const Homepage = () => {
    return (
        <PuppyComponent />
    )
};

ReactDOM.render(<Homepage />, appElement);