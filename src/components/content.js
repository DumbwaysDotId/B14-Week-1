import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import '../App.css';

class Content extends Component {

    getBacth(){
      return 12+2;
    }
  
    render(){
      const companyName = "DumbWays.id";
      return (
        <div>
          <Header />            
        <div className="App-content">
        {/*
        parsing props parent to child
         {this.props.name_property/props} */}

        <h1>{this.props.isi}</h1>

         {/* parsing Function
         {this.name_func} */}
         
        <p>Welcome To {companyName} Batch {this.getBacth()}</p>
  
        <img src= {'http://www.youloveit.com/uploads/posts/2019-02/1550499042_youloveit_com_disney_frozen_2_wallpapers08.jpg'} style={{width:"50%", height: "50%"}}/><br></br>
  
        <button onClick={() => alert("Hallo Siswa Bootcamp B#14 Ganteng Sekali")}>  
        Click Me
        </button>
      </div>
      <Footer />
      </div>
  
      );
    }
  }

  export default Content;
  