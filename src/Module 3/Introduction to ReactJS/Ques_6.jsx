// Conditional Rendering
// Description: Implement a component that renders different messages based on a passed isLoggedIn prop.

// Step 1: Write your code within the file, by the name of component as LoginMessage
// Step 2: Modify the App.js to use LoginMessage with a boolean prop

import React from 'react';
import PropTypes from 'prop-types';

function Ques_6({ isLoggedIn }) {
    if (typeof isLoggedIn !== 'boolean') {
        return <h1>Error: Invalid prop type.</h1>;
    }

    return (
        <>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
        </>
    );
}

Ques_6.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default Ques_6;
