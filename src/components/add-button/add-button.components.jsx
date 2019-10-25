import React from 'react';
import './add-button.styles.css';

function addButton () {
  console.log('Toggle the view of input box');
}

export const AddButton = () => (
  <button onClick={addButton}>Add to Library</button>
)