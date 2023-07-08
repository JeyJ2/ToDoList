import React from "react";
import {Link} from "react-router-dom";

function NotFound(){
    
    return(
        <div>
            <h1>Page introuvable</h1>
            <Link to="dolist">Retourner sur la page toDoList</Link>
        </div>
    )
}

export default NotFound;