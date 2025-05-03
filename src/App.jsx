import './App.css'
import React from 'react';
import Ques_6 from './Module 3/Introduction to ReactJS/Ques_6';

function App() {
    const isLoggedIn = true; // or false to test
    return (
        <Ques_6 isLoggedIn={isLoggedIn} />
    );
}

export default App;
