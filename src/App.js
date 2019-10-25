import React from 'react';
import {Input} from './components/input/input.component';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: 'What if?',
          author: 'Randall Munroe',
          id: 1
        },
        {
          title: 'Woolly',
          author: 'Ben Mezrich',
          id: 2
        },
        {
          title: 'The Dovekeepers',
          author: 'Alice Hoffman',
          id: 3
        }
      ]
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
