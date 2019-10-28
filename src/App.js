import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import ToggleInput from "./components/toggle-input/toggle-input.component";
import "./App.css";
import books from "./components/library/library";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books
    };
  }
  render() {
    return (
      <div className="container">
        <ToggleInput />
        <CardList books={this.state.books} />
      </div>
    );
  }
}

export default App;
