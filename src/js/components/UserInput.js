import React from 'react';
import sytles from './UserInput.css'

const UserInput = React.forwardRef((props, ref) => {
    return(
        <input className={sytles.UserInput} type="text" ref={ref}></input>
    );
})


export default UserInput;