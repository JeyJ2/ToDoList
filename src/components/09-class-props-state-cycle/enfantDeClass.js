import React, { useState } from "react";
import ClassParent from "./class";

class Enfant extends React.Component{
     
    handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.title.value
        console.log(value);
        this.props.methodeModif(value);
    }
    
    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="Entrez le titre"
                    name ="title"
                />
                <button>Valider</button>
            </form>
    
            </div>
        )
    }
}

export default Enfant