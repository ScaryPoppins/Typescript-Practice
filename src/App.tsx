import * as React from 'react';

export default class App extends React.Component {
  state = {
    count: 0, 
    horsePower: 0,
    duckPower: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };


  
  render () {
    return (
      <div>

        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

      <br/>
      <br/>
        <div> ----------------------------------------------------- </div>
      <br/>

      <div> Input your vehicle's horsepower and we'll convert it to duck power</div>

      <form>
        <input ></input>
        <button> Clear </button>
        <button> Submit</button>
      </form>

      <div> {this.state.horsePower} is equal to {this.state.duckPower}</div>



















      </div>
    );
  }
}