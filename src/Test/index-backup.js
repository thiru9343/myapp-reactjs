import React from 'react'; // help to create component
import ReactDOM from 'react-dom'; // help to display
import Header from './component/Header';
// these all imports are libraries

const App = () => {
    return(
        <React.Fragment>
            <Header />
            <h1>This is my React App page</h1>
            <h2>This for learning</h2>
        </React.Fragment>
    )
}


ReactDOM.render(<App/>, document.getElementById('root')); 

/* ReactDom has one method called rendor(), with the help of rendor() will disply
any tag, here App is a tag.
where we want to display this? in index.html in div of id=root
*/
// This is our functional component

