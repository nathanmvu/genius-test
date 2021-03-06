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
    chosen: [],
    text: 'Test your memory!'
  };

  handleClick = id => {
    // Incorrect Guess
    if(this.state.chosen.includes(id)) {
      this.setState({ text: "You lost!" });
      if(this.state.highScore < this.state.score) {
        this.setState({
          highScore: this.state.score
        })
      }
      // Resetting Game
      this.resetGame();
    // Correct guess
    } else {
      this.setState({ text: 'You guessed correctly!' })
      this.setState({ score: this.state.score + 1 })
      this.setState({ chosen: [...this.state.chosen, id]})
    };
    const imageArray = this.state.images;
    this.shuffleCards(imageArray);
  };

  // Resets Score and chosen array
  resetGame = () => {
    this.setState({ score: 0 })
    this.setState({ chosen: [] })
  }

  // Shuffling cards
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
        <Navbar 
          text={this.state.text}
          score={this.state.score} 
          highScore={this.state.highScore} 
        />
        <Header />
        <Wrapper>
          {this.state.images.map(image => (
            <Card 
              id={image.id}
              image={image.image}
              handleClick={this.handleClick} 
            />
          ))}
        </Wrapper>
      </div>
    )
  };
};

export default App;
