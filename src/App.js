import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewsStories from  './components/NewsStories';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">wel<span className="letter">come</span> to <span className="letter">hack</span>er news<span className="letter">!</span></h1>
        </header>

        <NewsStories >
          {this.props.children}
        </NewsStories>

      </div>
    );
  }
}

export default App;
