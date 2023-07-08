import React, { useState } from 'react';

function Counter2() {
    
    const [counter, setCounter] = useState(0);
    const [id, setId] = useState(0);
    const start = () => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        setId(interval);
    }

    const stop = () => {
        clearInterval(id);
    }

    const reset = () => {
        clearInterval(id);
        setCounter(0);
    }

    return (
        <div>
            <h1>----Counter --</h1>
            <p>duration : {counter} </p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

   

}

export default Counter2;