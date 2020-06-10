import React,  { useState, useEffect, useRef } from 'react';
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

    const dynamicAlphabet = [
      {
        puzzle:['b','a','c'],
        answer:['a','b','c']
      },
      {
          puzzle:['x','z','y'],
          answer:['x','y','z']
      },
      {
        puzzle:['n','p','m'],
        answer:['m','n','p']
      }
    ]


    var subTitle = "Arrange in Ascending Order";
    var correctAnswer = "Your Answer is Correct";
    var wrongAnswer = "Your Answer is Wrong";

    var statusSubmit = "Submit";
    var statusNext = "Next";
    var statusLoaded = "loaded";

    const answerOne = useRef();
    const answerTwo = useRef();
    const answerThree = useRef();
    const prevPuzzleTypeRef = useRef();
    
    const [shuffledArray, setShuffledArray] = useState(getDynamicArray(0)); 
    const [title, setTitle] = useState(subTitle);
    const[index, setIndex] = useState(0);
    const[status, setStatus] = useState("loaded");
    

    useEffect(() => {
      console.log("useEffect " + prevPuzzleTypeRef.current);

      if(props.puzzleType != prevPuzzleTypeRef.current && prevPuzzleTypeRef != undefined) {
        console.log("useEffect prop changed");
        setShuffledArray(getDynamicArray(0));
        setIndex(0);
        setTitle(subTitle);
        clearAnswerBox();
        setStatus(statusLoaded);
      }

      prevPuzzleTypeRef.current = props.puzzleType;

        if(status == statusSubmit) {
          console.log("status " + statusSubmit);
            console.log("Index value : " + index);
            console.log("answerOne answer : " + dynamicNumber[index].answer[0]);
            console.log("answerTwo answer : " + dynamicNumber[index].answer[1]);
            console.log("answerTwo answer : " + dynamicNumber[index].answer[2]);

            checkAnswer();

            setStatus(statusLoaded);
    
        } else if(status == statusNext) {
          setTitle(subTitle);
          clearAnswerBox();
            if(index == 3) {
                setIndex(0);
            }
            console.log("useState Index" + index);
            setShuffledArray(()=> getDynamicArray(index));
            setStatus(statusLoaded);
        }

        return () => {
         //equivalent to unmount
        };
      });

      function clearAnswerBox() {
        answerOne.current.value = "";
        answerTwo.current.value = "";
        answerThree.current.value = "";
      }

      function checkAnswer() {
        console.log("checkAnswer puzzleType : " + props.puzzleType);
        console.log("checkAnswer answerOne : " + answerOne.current.value);
        if(props.puzzleType == 'number') {
          if(answerOne.current.value == dynamicNumber[index].answer[0] &&
            answerTwo.current.value == dynamicNumber[index].answer[1] &&
            answerThree.current.value == dynamicNumber[index].answer[2]) {
            setTitle(correctAnswer);
          } else {
              setTitle(wrongAnswer);
          }
        } else {
          if(answerOne.current.value == dynamicAlphabet[index].answer[0] &&
            answerTwo.current.value == dynamicAlphabet[index].answer[1] &&
            answerThree.current.value == dynamicAlphabet[index].answer[2]) {
            setTitle(correctAnswer);
        } else {
            setTitle(wrongAnswer);
        }
        }

      }

      function handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit : " + answerOne.current.value);
        console.log("handleSubmit : " + answerTwo.current.value);
        console.log("handleSubmit : " + answerThree.current.value);
        console.log("submit button value " + event);
        setStatus(statusSubmit);
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
        setStatus(statusNext);
      }


      function getDynamicArray(index) {
        console.log("index" + index);
        if(props.puzzleType == 'number') {
          return dynamicNumber[index].puzzle;
        } else {
          return dynamicAlphabet[index].puzzle;
        }
        
      }

    return(
            <div className={styles.arrangeHorizontally}>
            <h2>{title}</h2>
            <br/>
            <Card id="first-card" value={shuffledArray[0]}/> 
            <Card id="second-card" value={shuffledArray[1]}/> 
            <Card id="third-card" value={shuffledArray[2]}/>
            <br/>
            <UserInput id="one-input" ref = {answerOne}/>
            <UserInput id="two-input" ref = {answerTwo}/>
            <UserInput id="three-input" ref = {answerThree}/>
            <br/>
            <br/>
            <button id="submit-btn" value={statusSubmit} 
            className={styles.puzzleButton} onClick={handleSubmit}>Submit</button>
            <button id="next-btn" value={statusNext} 
            className={styles.puzzleButton} onClick={handleNext}>Next</button>
        </div>
    );

}