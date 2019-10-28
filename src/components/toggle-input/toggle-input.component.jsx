import React from "react";
import AddButton from "../add-button/add-button.component";
import Input from "../input/input.component";

class ToggleInput extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true
    };
  }
  handleClick = () => {
    this.setState(prevState => {
      return (prevState.show = !prevState.show);
    });
  };

  render() {
    return (
      <div>
        <AddButton handleClick={this.handleClick} />

        {this.state.show && <Input />}
      </div>
    );
  }
}

export default ToggleInput;
