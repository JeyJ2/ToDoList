import React, {useState} from 'react';

function Counter(){

    
    /*  On déclare un state Counter et nous devons déclarer en même temps une function
    pour mettre à jour ce state (setrCounter) et lui attribuer une valeur initiale*/ 
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('Counter');

    return(
        <div>
            <h1>{title}</h1>
            <p>Counter : {counter} </p>
            <button onClick={() => setCounter(counter + 1)}>Incrémente</button>
        </div>
    )

}



export default Counter;