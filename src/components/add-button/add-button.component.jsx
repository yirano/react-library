import React from "react";
import "./add-button.styles.css";

function AddButton(props) {
  return (
    <div>
      <button onClick={() => props.handleClick()}>Add Book to Library</button>
    </div>
  );
}

export default AddButton;
