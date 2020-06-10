import React from "react";
import styles from "./Card.css"

export default function Card(props) {
    return (
         <p className={styles.box}><strong>{props.value}</strong></p>
        //<p style={{color:'red'}}>{props.value}</p>
    );
}