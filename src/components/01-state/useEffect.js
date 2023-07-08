import React, { useState, useEffect } from 'react';


/* 
  Créer un state prix et total avec une valeur définit

 GÉNÉRER un button pour prix et total qui nous permettrons 
 de les incrémenter de cinq à chaque clique.

 rajouter ensuite le hook useEffect qui s'active 
 uniquement quand la valeur de total change et non du prix, 
 cette function doit contenir une alert pour prévenir du changement 
 de valeur.
   */

function Price(){

    const[prix, setPrix] = useState(30);
    const[total, setTotal] = useState(50);


    useEffect(() => {
        if(total != 50)
        alert(`Attention la valeur de Total est modifiée total = ${total}`);
    }, [total]);

    // useEffect(() => {
    //     alert(`Welecome to the jungle ! `);
    // }, []);

    return (
        <div>
            <h1>Exo </h1>
            <p>Prix : {prix}</p>
            <button onClick={() => setPrix(prix + 5)}>Incrémente prix</button>
            <p>Total : {total}</p>
            <button onClick={() => setTotal(total + 5)}>Incrémente total</button>
        </div>
    )

}

export default Price;