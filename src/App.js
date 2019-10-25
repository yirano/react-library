import React from 'react';
import {Input} from './components/input/input.component';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: ['one', 'two', 'three']
    }
  }
  render(){
    return (
      <div className = "container">
        <Input />
        <CardList books={this.state.books} />
      </div>
    )
  }
}

export default App;
