import React from "react";
import Enfant from "./enfantDeClass";

class ClassParent extends React.Component{

    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            title : "Class Parent"
        }
    }

    handleChange = (args) =>{
        this.setState({
            title : args
        })
    }
    render(){
        const {title} = this.state;

        console.log(title);
        return(
            <>
                <h1>{title}</h1>
                <Enfant 
                    methodeModif = {this.handleChange}
                />
            </>
        )
    }
}
export default ClassParent