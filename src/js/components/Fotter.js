import React, { Fragment, useRef } from "react";
import styles from './sytles/Footer.css';

export default function Fotter() {

    const allRef = useRef();
    const Completed = useRef();
    const Active = useRef();

    function onMouseOver(event) {
        //console.log(event.target);
        //console.log(event);
        
    }

    function onClick(event) {
        console.log(event.target.id);
        console.log(allRef.current.id);

        allRef.current.className = "LinkStyle";
        Completed.current.className = "LinkStyle";
        Active.current.className = "LinkStyle";
        event.target.className = "selectedStyle";
    }


    return (
    <Fragment>
        <label >Show:</label> 

        <label 
        id="all_label"
        ref={allRef} 
        onMouseOver={onMouseOver} 
        onClick={onClick} 
        className="selectedStyle">
            All </label>
        <label 
        id="active_label"
        ref={Active} onMouseOver={onMouseOver} onClick={onClick} className="LinkStyle">
            Active</label>
        <label 
        id="completed_label"
        ref={Completed} onMouseOver={onMouseOver} onClick={onClick} className="LinkStyle">
            Completed</label>
    </Fragment>
    );
}