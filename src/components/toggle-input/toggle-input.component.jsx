import React from 'react';
import AddButton from '../add-button/add-button.component';
import Input from '../input/input.component';

class ToggleInput extends React.Component {

  constructor() {
    super();

    this.state = {
      show: true,
    }

  }

  render(){
    return(
      <div>
        <AddButton onClick = {this.state.show===true ? console.log(true) : console.log(false)}/>
        <Input />
      </div>
    )
  }
}

export default ToggleInput;