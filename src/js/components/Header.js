import React from 'react';
import '../../global.css';

function Header() {
    return(
        <div className="heading">
            <form>
                <input className="edit-text" type="text" />
                <button type = "submit">Add To List</button>
            </form>
        </div>
        
    );
}

export default Header;