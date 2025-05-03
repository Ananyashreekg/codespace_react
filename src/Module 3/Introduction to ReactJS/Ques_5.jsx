// Passing Props to Components
// Description: Create a Profile component that receives name and age as props and displays them.

// Step 1: Write your code within the file, by the name of component as Profile
// Step 2: Update App.js to pass props to the Profile component

import React from 'react';
import PropTypes from 'prop-types';

function Ques_5({ name, age }) {
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

// Prop type validation
Ques_5.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

// Default props to handle missing props
Ques_5.defaultProps = {
    name: 'Unknown',
    age: 0,
};

export default Ques_5;
