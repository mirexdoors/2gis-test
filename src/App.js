import React, {Component} from 'react';

import './App.css';
import Books from './containers/Books/Books';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
      return (
          <div className="App">
              <Books />
          </div>
      );
    }
}

export default App;
