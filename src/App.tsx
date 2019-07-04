import * as React from 'react';
import './App.css'


// const colors = {
//   layout:{
//     color = 'red'
//   }
  
// }



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



  horsePowerInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
    horsePower: (e.currentTarget.value)
  })
}



// horsePowerInput (event: {target: HTMLInputElement;}) {
//     this.setState({horsePower: event.target.value})
//   }

//   horsePowerInput = (e: React.FormEvent<HTMLInputElement>) => {
//   {this.state.horsePower : e.target.value}
// }


// horsePowerInput(e: React.ChangeEvent<HTMLInputElement>) {
//   // No longer need to cast to any - hooray for react!
//   this.setState({horsePower: e.target.value});
// }

  
  render () {
    // const classes = useStyles();
    console.log(this.state.horsePower)
    return (
      <div 
      className = 'App'
      >

        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

      <br/>
      <br/>
        <div> ----------------------------------------------------- </div>
      <br/>

      <div> Input your vehicle's horsepower and we'll convert it to duck power</div>
      <br/>

      
      <form>

        <input 
        // value= {this.state.horsePower} 
        onChange={this.horsePowerInput}
        ></input>

        <br/><br/>
        
        <button> Clear </button>
        {/* <button> Submit</button> */}

      </form>

      <br/><br/>

      <div> {this.state.horsePower} horsepower is equal to {this.state.horsePower*21} duck power</div>


      <br/><br/><br/><br/><br/><br/><br/><br/>
Mallard have an output in continuous flight of ~30 w/kg, and a mass of 1 - 1.4kg, giving ~30-42w mechanical output.
<br/>
30-42w / (745.7w/hp) ~ 0.040 - 0.056 hp/duck.
<br/>
400/(0.040 - 0.056 hp/duck) ~7143 - 10000 ducks required.










      </div>
    );
  }
}