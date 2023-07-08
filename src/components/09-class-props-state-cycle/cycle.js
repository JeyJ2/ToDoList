import React from "react";

class Cycle extends React.Component {


    //on peut aussi créer un stae sans passer par un constructor
    state ={
        title : "Life Cycle react"
    }

    //s'éxécute lors du chargement de la page
    componentDidMount(){
        console.log("DidMount=>",1);
    }


    //s'éxécute vant la modification
    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate=>");
        return true;
    }

    componentDidUpdate(){
        console.log("DidUpdate=>");
    }

    handleChange = () =>{
        this.setState({
            title : "New Cycle"
        })
    }


    render() {
        return (
            <>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleChange}>Change Title</button>
            </>
        );
    }
}

export default Cycle;