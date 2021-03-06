import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard';
import Icons from './icons.json';
import "./components/iconCard.css";
import "./components/NavBar.css"
import "./components/Banner.css"

const shuffleArray = (array) => {
  //assigning variable ame to array
  let counter = array.length;
  //while loop to loop through array
  while (counter > 0) {
      // pick a random index
      let index = Math.floor(Math.random() * counter);
      // decrease counter by 1
      counter--;
      // change last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};
class App extends Component {

  
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,
    gameOver: false
  };

  componentDidMount() {
    this.setState({result: "Click a character to get started"})
  }

  // increase points and add id of element to array on click 
  clickedPlayer = (id) => {
    console.log(`Picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  }

  //increment the point by 1 when a new charapeter is picked and check if the user has won
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    if (score === this.state.Icons.length) {
      this.setState({
        result: "Winner!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "New high score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "You got this!"
      });
    }
    this.resetIconArray();
  }

  // reset the game when the user chooses a duplicate
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore:0,
      topScore: this.state.topScore,
      result: "Oh No! [GAME OVER] Try again next time.",
      clicked: [],
      //Icons,
      gameOver: true
    });
    this.resetIconArray();
  }

  // function to reset icons at random
  resetIconArray = () => {
    let newScramble = shuffleArray(Icons);
    this.setState({Icons: newScramble})
  }

  render() {
    return (
      <div className='container'>
        <NavBar />
        <Banner topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
        <div className='mainStyle'>
        {this.state.Icons.map(icon => (
          <IconCard
            id={icon.id}
            image={icon.image}
            clickedPlayer={this.clickedPlayer}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;