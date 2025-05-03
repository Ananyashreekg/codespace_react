// JSX Rules
// Description: Identify and correct errors in incorrect JSX syntax.
import React from 'react'; 
function Ques_4() {
    return (
        <div>
            <h1>Unclosed tag</h1> {/* Fixed unclosed <h1> tag */}
            <p>Self-closing tag example <img src="example.png" alt="Example" /></p> {/* Fixed <img> tag */}
            <ul>
                <li>List item 1</li> {/* Fixed unclosed <li> tag */}
                <li>List item 2</li> {/* Fixed unclosed <li> tag */}
            </ul>
        </div>
    );
}

export default Ques_4;