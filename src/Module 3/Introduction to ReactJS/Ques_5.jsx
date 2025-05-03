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

// Prop type validation with additional checks
Ques_5.propTypes = {
    name: PropTypes.string.isRequired, // name must be a string
    age: (props, propName, componentName) => {
        if (props[propName] <= 0) {
            return new Error(`${propName} in ${componentName} must be a positive number.`);
        }
        if (typeof props[propName] !== 'number') {
            return new Error(`${propName} in ${componentName} must be a number.`);
        }
    }
};

// Default props for missing props
Ques_5.defaultProps = {
    name: 'Unknown',
    age: 0,
};

export default Ques_5;
