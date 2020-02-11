import React, {Component} from 'react';
import '../App.css';

class Increment extends Component {
    constructor(){
        super()
        this.state = {
            counter: 1,
            counter2 : 0
         }
    }

    render(){
        return (
          <div className="App-content">
              <p>Click The Button to Increment !</p>
              <button onClick={() => this.setState({counter: this.state.counter + 1})} > Hit
            </button>
            <p>{this.state.counter}</p>
          </div>  
        )
    }
}

export default Increment