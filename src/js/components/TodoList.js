import React from 'react';
import '../../global.css';

function TodoList(){
    const myList = ['a', 'b', 'c', 'd', 'e'];
    const TodoListItem = () => (
        <ul>
            {myList.map(function(item){
                return <li key={item}>{item}</li>
            })

            }
        </ul>
    );

    return(
        <div>
            <TodoListItem className="list-item" list= {myList} />
        </div>
    );

} 

export default TodoList;