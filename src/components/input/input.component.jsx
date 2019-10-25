import React from 'react';
import './input.styles.css';

export const Input = props => (
  <div className = "inputBox">
    <input type="text" name="input-title" id="input-title" placeholder="Title" />
    <input type="text" name="input-author" id="input-author" placeholder="Author" />
    <input type="number" name="input-pages" id="input-pages" placeholder="Pages" />
    <button>Submit</button>
  </div>
)