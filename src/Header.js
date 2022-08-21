import React, {Component} from 'react';

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'This is a React state',
            details:'This is another state'
        }
    }
    render(){
        const mydata=this.state;
        return(
            <header>
            <p className="logo">{this.state.title}</p>
            <input/>
            <p>{mydata.details}</p>
            </header>
        )
    }
}

export default Header;
