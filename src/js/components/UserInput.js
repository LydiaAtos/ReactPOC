import React from 'react';

const UserInput = React.forwardRef((props, ref) => {

    var state = {value: ''};

   /* function handleChange(event) {
        state  = event.target.value;
        console.log(state);
    }*/

    return(
        <input type="text" ref={ref}></input>
    );
})


export default UserInput;