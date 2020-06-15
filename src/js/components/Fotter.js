import React, { useRef, Fragment} from 'react'
import './sytles/Footer.css'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "./UiReducer";
import { useSelector, useDispatch } from "react-redux";

export default function Fotter () {
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const refs = [useRef(), useRef(), useRef()]

  function onMouseOver (event) {
    // console.log(event.target);
    // console.log(event);
  }

  function onClick (event) {
    console.log(event.target.id)

    if("all_label" == event.target.id) {
      dispatch({ type:SHOW_ALL })
    } else if("active_label" == event.target.id) {
      dispatch({ type:SHOW_ACTIVE })
    } else if("completed_label" == event.target.id) {
      dispatch({ type:SHOW_COMPLETED })
    }
  }

  function setStyle() {
    refs.forEach(element => {
      console.log(element)
      if(element.current == undefined)
        return
      if (element.current.id === ui.actionLabel) {
        element.current.className = 'selectedStyle'
      } else {
        element.current.className = 'LinkStyle'
      }
    })
  }

  setStyle()

  return (
    
    <Fragment>
   
      <label >Show:</label>
      <label
        id="all_label"
        ref={refs[0]}
        onMouseOver={onMouseOver}
        onClick={onClick}
        className="selectedStyle">
            All </label>
      <label
        id="active_label"
        ref={refs[1]} onMouseOver={onMouseOver} onClick={onClick} className="LinkStyle">
            Active</label>
      <label
        id="completed_label"
        ref={refs[2]} onMouseOver={onMouseOver} onClick={onClick} className="LinkStyle">
            Completed</label>
     
    </Fragment>
  )
}
