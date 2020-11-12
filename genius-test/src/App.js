import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import Wrapper from './components/Wrapper/Wrapper.js';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    clicked: []
  };

  clickHandler = id => {
    if(this.state.clicked.includes(id)) {
      this.setState({ text: "You lost!" });
      if(this.state.highScore < this.state.score) {
        this.setState({
          highScore: this.state.score
        })
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Card 
          id={Image.id}
        />
      </div>
    )
  };
};

export default App;
