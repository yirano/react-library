import React from "react";
import "./input.styles.css";

function addToLibrary() {
  console.log("Add to library");
}

const Input = props => (
  <div className="inputBox">
    <input
      type="text"
      name="input-title"
      id="input-title"
      placeholder="Title"
    />
    <input
      type="text"
      name="input-author"
      id="input-author"
      placeholder="Author"
    />
    <input
      type="number"
      name="input-pages"
      id="input-pages"
      placeholder="Pages"
    />
    <button className="input-button" onClick={addToLibrary}>
      Submit
    </button>
  </div>
);

export default Input;
