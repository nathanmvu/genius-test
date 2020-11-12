# Genius Test
Not actually a genius test but test your memory with this architecture themed clicking game. Click a building to earn a point but try not to click the same building twice or else the game is lost and score will be reset.

## Description
This is a React based application which shuffles images of some of my favorite buildings from some of my favorite architects (Le Corbusier, Philip Johnson, Ludwig Mies van der Rohe, etc...) on the page which can be clicked to earn points. The application uses React in order to render components onto the page with the appropriate images and text.

## Table of Contents
* [Getting Started](#getting-started)
* [Installation](#installation)
* [Usage](#usage)
* [Author](#author)
* [Acknowledgments](#acknowledgments)
* [License](#license)

## Getting Started
* [Github Repository](https://github.com/nathanmvu/genius-test)
* [Deployed Link](https://nathanmvu.github.io/genius-test/)
* [Usage Demo Video](https://drive.google.com/file/d/1EoGvoDANHZuKpPkAbq3lzhgNPmqd9Z39/view)

![Demo GIF](./genius-test/public/img/demo.gif)

## Installation
To run the program, install it from the repository and then navigate to the App.js file in the src folder. In an integrated terminal run
`npm start`
and the program will launch in a web browser.

## Usage
Main Screen:
![](./public/assets/img/1.png)

### Code Snippet
The code written to handle image clicks.
```
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
```

## Author
* Nathan Vu
* [Github](https://github.com/nathanmvu)
* [Email](mailto:nathanvu99@gmail.com)

## Acknowledgments
* Project parameters provided by the UCB Extension Coding Bootcamp

## License
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

