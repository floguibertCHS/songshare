import React, {Component} from 'react';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
// import logo from './logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <PlayListForm />
        </div>
        <div >
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
