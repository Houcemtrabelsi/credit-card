import React, { Component } from 'react';
import background1 from './images/backcard.jpg'
import puce1 from './images/puce.png'
import visa1 from './images/visa logo.png'
import './App.css';



var Style = {
  backgroundImage: "url(" + background1 + ")",
  width: "65%",
  height: "600px",

}
class App extends Component {
  render() {
    return (
      <div className="App">
        <section style={ Style } >
<h1 className="titre1">CREDIT CARD</h1>
<img className="puce" src= { puce1} />

<div className="total">
<div >
  <div>
      <p className="numcarte">7253 3256 7895 1245</p>
  </div>

  <div className="bloc1">
      <div>
         <h3 className="num ">5422</h3>
         <p className=" text1 mt-0">CARDHOLDER</p>
      </div>
  <div className="bloc2">   
      <div className=" partie1">
        <p className="p1">VALID</p>
        <p className="p2">THRU</p>
      </div>

      <div className="partie2">
        <p className="p3">MONTH/YEAR</p>
        <h1 className="p4">11/50</h1>
      </div>
  
  </div> 
  </div>

</div>
<div className="visapart">
<img className="visalogo" src= { visa1} />
</div>
</div>
      </section> 
      </div>
    );
  }
}

export default App;
