// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.

import React, { useState, useEffect } from 'react';

const Ques_10.Local_Storage = () => {
  const [text, setText] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  // Load from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('userInput');
    if (saved) {
      setText(saved);
    }
  }, []);

  // Save to localStorage whenever text changes
  useEffect(() => {
    localStorage.setItem('userInput', text);
    if (text !== '') {
      setSavedMessage('✅ Saved!');
      const timer = setTimeout(() => setSavedMessage(''), 1500);
      return () => clearTimeout(timer);
    } else {
      setSavedMessage('');
    }
  }, [text]);

  const handleClear = () => {
    setText('');
    localStorage.removeItem('userInput');
    setSavedMessage('🗑️ Cleared!');
    setTimeout(() => setSavedMessage(''), 1500);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '8px', fontSize: '18px', width: '300px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleClear} style={{ padding: '6px 12px', marginTop: '10px' }}>
          Clear
        </button>
      </div>
      <p style={{ color: 'green', marginTop: '10px' }}>{savedMessage}</p>
      <p style={{ marginTop: '5px' }}>
        <strong>Stored:</strong> {text || 'Nothing saved yet.'}
      </p>
    </div>
  );
};

export default Ques_10.Local_Storage;
