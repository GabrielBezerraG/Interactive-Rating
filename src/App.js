import React from "react";
import Rating from './components/Rating/Rating';
import Submitted from "./components/Submitted/Submitted";

const numbers = [1, 2, 3, 4, 5];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      submitted: false
    }
    this.chooseRatingNumber = this.chooseRatingNumber.bind(this);
    this.submit = this.submit.bind(this);
  }

  chooseRatingNumber(event) {
    this.setState({
      rating: Number(event.target.dataset.number)
    });
  }

  submit() {
    if (this.state.rating !== '') {
      this.setState({
        submitted: true
      })
    }
  }
  
  render() {
    return (
      <div className="background-container">
        <main className="main-container">
          {this.state.submitted 
          ? <Submitted rating={this.state.rating} /> 
          : <Rating numbers={numbers} 
            rating={this.state.rating} 
            chooseRatingNumber={this.chooseRatingNumber} 
            submit={this.submit}/>}
        </main>
      </div>
    )
  }
}
