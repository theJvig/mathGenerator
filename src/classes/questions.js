import React from 'react'; 

class Questions extends React.Component{

    constructor(){
        super();
        
        this.state = {
            randNumberOne: this.randomNumber(),
            randNumberTwo: this.randomNumber(),
            randOperator: this.randomOperator(),
        } 
        
    }

    randomNumber(){
        return Math.floor(Math.random() * (10 - 0 + 1) + 0);
    }
    randomOperator(){
        let operator = ["+", "-", "/", "*"]; 
        let rand = Math.floor(Math.random() * operator.length);
        return operator[rand]; 
    }

    randomEquation(){
        let operator = ["+", "-", "/", "*"]; 
        let randOperator = Math.floor(Math.random() * operator.length);
    }

    render(){
        return(
            <div>
                <p>Random Number 1: { this.state.randNumberOne } </p>
                <p>Random Number 2: { this.state.randNumberTwo } </p>
                <p>Random Operator: { this.state.randOperator } </p>
                <p>Solve: {this.state.randNumberOne} {this.state.randOperator} {this.state.randNumberTwo}</p>
            </div>
            
        )
    };
}

export default Questions; 