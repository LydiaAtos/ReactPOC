import React,  { useState, useEffect, useRef, createRef } from 'react';
import Card from './Card';
import styles from './ArrangePuzzle.css';
import UserInput from './UserInput';
export default function ArrangePuzzle(props) {

    const dynamicNumber = [
        {
          puzzle:[1,5,2],
          answer:[1,2,5]
        },
        {
            puzzle:[9,6,2],
            answer:[2,6,9]
        },
        {
            puzzle:[7,3,9],
            answer:[3,7,9]
        }
      ]

    const answerOne = useRef();
    const answerTwo = useRef();
    const answerThree = useRef();
    
    const [shuffledArray, setShuffledArray] = useState(getDynamicArray(0)); 
    const [title, setTitle] = useState("Arrange in ascending order");
    const[index, setIndex] = useState(0);
    const[status, setStatus] = useState("loaded");

    useEffect(() => {
        console.log("useEffect");
        if(status == 'submit') {
            console.log("Index value : " + index);
            console.log("answerOne answer : " + dynamicNumber[index].answer[0]);
            console.log("answerTwo answer : " + dynamicNumber[index].answer[1]);
            console.log("answerTwo answer : " + dynamicNumber[index].answer[2]);

            if(answerOne.current.value == dynamicNumber[index].answer[0] &&
                answerTwo.current.value == dynamicNumber[index].answer[1] &&
                answerThree.current.value == dynamicNumber[index].answer[2]) {
                setTitle("Your Answer is Correct");
            } else {
                setTitle("Your Answer is Wrong");
            }

            setStatus('loaded');
    
        } else if(status == 'next') {
            if(index == 3) {
                setIndex(0);
            }
            console.log("useState Index" + index);
            setShuffledArray(()=> getDynamicArray(index));
            setStatus('loaded');
        }

        return () => {
          // Clean up the subscription
          //subscription.unsubscribe();
        };
      });

      function handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit : " + answerOne.current.value);
        console.log("handleSubmit : " + answerTwo.current.value);
        console.log("handleSubmit : " + answerThree.current.value);
        setTitle("Your Answer is .......");
        setStatus("submit");
      }

      function handleNext(event) {
        event.preventDefault();
        console.log("handleSubmit");
        setIndex(prevIndex => 
           { 
                if(prevIndex == 2)   
                return 0;
                else
                return prevIndex + 1 
            }
        );
        setStatus("next");
      }


      function getDynamicArray(index) {
        console.log("index" + index);
        return dynamicNumber[index].puzzle;
      }

    return(
            <div className={styles.arrangeHorizontally}>
            
            <h2>{title}</h2>
            <br/>
            <Card value={shuffledArray[0]}/> 
            <Card value={shuffledArray[1]}/> 
            <Card value={shuffledArray[2]}/>
            <br/>
            <UserInput ref = {answerOne}/>
            <UserInput ref = {answerTwo}/>
            <UserInput ref = {answerThree}/>
            <br/>
            <br/>
            <button value="Submit" onClick={handleSubmit}>Submit</button>
            <button value="Next" onClick={handleNext}>Next</button>
        </div>
    );

}