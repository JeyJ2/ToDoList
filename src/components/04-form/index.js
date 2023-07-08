import React, { useState } from 'react';

const Formulaire = () => {


    /**
  On crée des valeurs pas défaut pour initialer notre objet user.
  qui contiendra les données saisies.*/

    /**
         
    @event.target
    Contient notre balise input de ce fait on peut s'en 
    servir pour récupérer un attribut spécifique.
    On déstructure e.target pour récupérer l'attribut
    name ainsi que sa value.
    @Destructuration
    Permet directement de déclarer une variable
    et de lui assigner la valeur d'une propriété d'un objet.
    */

    const [user, setUser] = useState({
        prenom: '',
        nom: ''
    });

    const [text, setText] = useState("");
    //  const [checkForm, setCheckForm] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /*
      C'est ici qu'on peut envoyer les informations pour la bdd, store, api etc
      on peut faire une ou des conditions pour vérifier par si le mot de passe contient bien 8 caractère au minimum etc.
    */

        setText("Prenom : " + user.prenom + " Nom : " + user.nom);

        (user.nom.length > 2 && user.prenom.length > 2 && console.log("success"));

        /*
         if (user.prenom.length >= 3 && user.nom.length >= 3) {
      setCheckForm(true);
      console.log("succès");
    } else {
      setCheckForm(false);
      console.log("erreur");
    }
    */

    }

    /*
    "Veuillez vérifier si le prénom et le nom contiennent au moins 3 caractères. 
    Si c'est le cas, affichez un message de succès dans la console avec console.log()."
    */


    return (
        <div>
            <h1>Formulaire</h1>
            {/* {checkForm && (
                <p>
                    Name : {user.nom} Prenom : {user.prenom}
                </p>
            )} */}
            <p>{text}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prenom : </label>
                <input
                    type="text"
                    placeholder="Prenom"
                    id="prenom"
                    name="prenom"
                    onChange={handleChange}
                />

                <label htmlFor="nom">Nom : </label>
                <input
                    type="text"
                    placeholder="Nom"
                    id="nom"
                    name="nom"
                    onChange={handleChange}
                />

                <button type="submit" >Valider</button>
            </form>
        </div>
    );
}

export default Formulaire