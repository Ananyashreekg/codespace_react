// Conditional Rendering
// Description: Implement a component that renders different messages based on a passed isLoggedIn prop.

// Step 1: Write your code within the file, by the name of component as LoginMessage
// Step 2: Modify the App.js to use LoginMessage with a boolean prop

import React from 'react';

function Ques_6() {
    const isLoggedIn = true; // Change to false to test the other case

    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
        </div>
    );
}

export default Ques_6;
