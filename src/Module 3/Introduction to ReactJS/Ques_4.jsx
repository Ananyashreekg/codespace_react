// JSX Rules
// Description: Identify and correct errors in incorrect JSX syntax.
import React, { useState } from 'react'; 
function Ques_4() {
    const [imgError, setImgError] = React.useState(false);

    const handleError = () => {
        setImgError(true); // Set the state to show fallback image
    };

    return (
        <div>
            <h1>Unclosed tag</h1>
            <p>
                Self-closing tag example{" "}
                <img
                    src={imgError ? "fallback.png" : "example.png"}
                    alt="Example"
                    loading="lazy"
                    onError={handleError} // Fallback to a different image on error
                />
            </p>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
            </ul>
        </div>
    );
}

export default Ques_4;