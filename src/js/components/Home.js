import React, { useState } from 'react';
import ReactDOM from "react-dom";
import '../../css/home.css';
import ArrangePuzzle from "./ArrangePuzzle";


function Home() {

   const [value, setValue] = useState('number');

   function handleSubmit(event) {
      console.log("value " + event.target.value);
      setValue(event.target.value);
    }

    return (
        <div>
           <h1 className="header">Welcome to Puzzle World</h1>
           
           <button className="button" value="number" onClick={handleSubmit} >Number </button>
           <button value="alphabets" onClick={handleSubmit}>Alphabets</button>

           <ArrangePuzzle puzzleType = {value}/>
        </div>
     );
}
export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;