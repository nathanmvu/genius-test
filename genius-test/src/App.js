import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import images from './images.json';

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    clicked: []
  };

  handleClick = id => {
    if(this.state.clicked.includes(id)) {
      this.setState({ text: "You lost!" });
      if(this.state.highScore < this.state.score) {
        this.setState({
          highScore: this.state.score
        })
      }
      // Resetting Game
      this.resetGame();
    } else {
      this.setState({ score: this.state.score + 1 })
      this.setState({ clicked: [...this.state.clicked, id]})
    };
    const imageArray = this.state.images;
    this.shuffleCards(imageArray);
  };

  resetGame = () => {
    this.setState({ score: 0 })
    this.setState({ clicked: [] })
  }

  shuffleCards = imageArray => {
    for(let i = 0; i < imageArray.length; i++) {
      let randNum = Math.floor(Math.random() * (i+1));
      let temp = imageArray[i];
      imageArray[i] = imageArray[randNum];
      imageArray[randNum] = temp;
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Wrapper>
          {this.state.images.map(image => (
            <Card 
              id={image.id}
              image={image.image}
              clickHandler={this.handleClick} 
            />
          ))}
        </Wrapper>
      </div>
    )
  };
};

export default App;
