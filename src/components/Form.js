import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                car : '',
                fruit : '',
                checkbox:{
                    Box: '',
                    Bottle: '',
                    Pen : ''
                }
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with details as ${this.state.car}, ${this.state.fruit}, ${this.state.checkbox.Box},${this.state.checkbox.Bottle},${this.state.checkbox.Pen}`);
    }   

    handleselect = (e) =>{
        this.setState({
            car : e.target.value
        })
    }

    handleClick = (e) =>{
        this.setState({
            gender : e.target.value
        })
    }

    handleradio = (e) =>{
        this.setState({
            fruit: e.target.value
        })
    }   

    handlecheckbox = (e) =>{
        this.setState({
            checkbox:{
                ...this.state.checkbox,
                [e.target.value] : e.target.value 
            }
        })
    }

    render() {
        return (
            <>
                <h1>Select, Radio, and CheckBox</h1>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleselect}>
                        <option></option>
                        <option>Volvo</option>
                        <option>Mercedes</option>
                        <option>Maruti</option>
                    </select>

                    <br/><br/>

                    <input type="radio" name="fruit" value="apple" onChange={this.handleradio}/>Apple<br/>
                    <input type="radio" name="fruit" value="orange" onChange={this.handleradio}/>Orange<br/>
                    <input type="radio" name="fruit" value="melon" onChange={this.handleradio}/>Melon<br/>
                    
                    <br/>
                    <input type="checkbox" name="stationary" value="Box" onChange={this.handlecheckbox}/>Box<br/>
                    <input type="checkbox" name="stationary" value="Bottle" onChange={this.handlecheckbox}/>Bottle<br/>
                    <input type="checkbox" name="stationary" value="Pen" onChange={this.handlecheckbox}/>Pen<br/>

                    <button type="submit">
                        Enter
                    </button>
                </form>
            </>
        )
    }
}

export default Form