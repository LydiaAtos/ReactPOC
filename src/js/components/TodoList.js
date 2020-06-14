import React, { Fragment, useState } from 'react';
import '../../global.css';

import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ACTIVE } from "./UiReducer";

function TodoList () {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const TodoListItem = (element) => (
        console.log("TodoListItem" + JSON.stringify(element)),
        <ul>
            {element.list.map(function(item){
                return <li key={item} 
                onClick={() => dispatch({ type:REMOVE_ACTIVE, payload: {item} })}>{item}</li>
            })
            }
        </ul>
    );

    console.log("redux status " + ui.userAction);
    return <Fragment>
        <TodoListItem className="list-item" list= {ui.active} />
    </Fragment>
} 

export default TodoList;