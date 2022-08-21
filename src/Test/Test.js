import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Test2'

const App = () => {
    return(
        <div>
        <Header/>
        <h1>This is React</h1>
        </div>
    )
}

ReactDOM.render('App/', document.getElementById('root'));


/*
// ES5
function add(a, b){
    return a+b;
}
add(1,2)

//ES6
const sub = (a, b) => {
    return a-b;
}
sub(4,2)

*/
