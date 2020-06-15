import React from 'react';
import '../../global.css';
import { useDispatch } from "react-redux";
import {ADD_TO_LIST} from './UiReducer';

function Header() {
    let input;
    const dispatch = useDispatch();
    return(
        <div className="heading">
        <form
            onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch({type: ADD_TO_LIST, payload: input.value})
            input.value = ''
            }}
        >
            <input className="edit-text" ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
        </form>
    </div>
        
        
    );
}

export default Header;