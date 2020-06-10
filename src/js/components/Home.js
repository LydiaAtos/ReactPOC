import React from "react";
import '../../css/home.css';

function Home() {
    return (
        <div>
           <h1 className="header">Welcome to Puzzle World</h1>
           <button className="button" value="number" >Number </button>
           <button value="alphabets">Alphabets</button>
        </div>
     );
}
export default Home;