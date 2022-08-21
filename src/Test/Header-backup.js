import React, {Component} from 'react';

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:"This is a React state",
            details: "This is details of state"
        }
    }
    render(){
        const mystyles ={
            header:{
                backgroundColor: 'teal',
                color:'green'
            },
            logo:{
                color:'red',
                textAlign:'center',
                fontSize:'30px'
            }
        }
        const mydata=this.state;
        return(
            <header styles={mystyles.header}>
            <p styles={mystyles.logo}>{this.state.title}</p>
            <input/>
            <p>{mydata.details}</p>
        </header>
        )
    }
}

export default Header;


/* ////////Functional component////////

const Header = () => {
    return(
        <header>
            <p>This is another component</p>
            <input/>
        </header>
    )
}

export default Header; // ES6

*/




/////////////ES5/////////////
/* var react = require(react); //ES5

function Header(){
    return(
        <header>
            <p>This is another component</p>
            <input/>
        </header>
    )
}

module.exports = Header; //ES5
*/





//////////import multiple classes
/* 
export default Header = () =>{}
export default Footer =() =>{}

import {Header, Footer} from './abc';
*/