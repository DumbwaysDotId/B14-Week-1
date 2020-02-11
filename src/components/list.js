import React,{Component} from 'react';
import '../App.css';

class listReact extends Component {
    render(){
        const cars = ["Mercedes-Benz","BMW","Audi","Lambhorghini"];
      return (
        <div className="App-content">
            {cars.map((car)=>(<p>{car}</p>))}
        </div>
        
    );
    } 
  }
  export default listReact;