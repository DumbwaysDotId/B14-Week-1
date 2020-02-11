import React,{Component} from 'react';
import '../App.css';

class flexCSS extends Component {
    render(){
      return (
		//try setting `flexDirection` to `column`
        <div style={{flexDirection:"column", display:"flex",justifyContent: "space-between", height: "100vh", alignItems: "center"}}>
            <div style={{width:"50px", height:"50px", backgroundColor: "powderblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "skyblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "steelblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "powderblue"}}></div>
            <div style={{width:"50px", height:"50px", backgroundColor: "steelblue"}}></div>
        </div>
        
    );
    } 
  }
  
export default flexCSS;