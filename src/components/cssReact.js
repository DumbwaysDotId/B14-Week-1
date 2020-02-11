import React, {Component} from 'react';
import '../App.css';

class Css extends Component {
    render(){
      return (
        <div className="App-content">
            <p style={{color:"red",fontSize: 100}}>Batch 14 Tampan Sekali</p>
            <p style={styleSheet.p2}>Batch 14 Mantan Lola Zeita Semua</p>
            <p style={{color:"blue",fontSize:150}}>Batch 14 Wibu Semua</p>
        </div>
    
    );
    }
  }
  const styleSheet = {
        p2 : {
            fontSize: 50,
            color: "orange",
            fontWeight: "Bold"
        }    
}

  

  export default Css;
  