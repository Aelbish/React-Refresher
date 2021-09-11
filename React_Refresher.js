//React is an open-source JavaScript library which is used for building user interfaces especially for single page applications (SPA) .

//We write our react code but it gets transformed in the build step where the code is transformed so that the browsers understands it.

//Created by a Facebook engineer named Jordan Walke.
//React is all about components
//Components help for reusability and separation of concerns

//We write code in a declarative component based way
//Define the desired target states and let React figure out the actual JS DOM instructions

//Features of React
//JSX - JavaScript Syntax Extension
//It uses VirtualDOM instead of RealDOM
//React keeps lightweight representation of the real DOM in the memory known as the VDOM.
//RealDOM manipulations are expensive
//When the state of the object changes, VDOM changes only that object in the real DOM instead of updating all the objects.
//When the state of the object changes, VDOM gets updated. The react application that compares the previous state and then updates only those objects in real DOM
//instead of updating all the objects.
//Supports server-side rendering
//Follows unidirectional data flow or data binding
//Uses reusable/composable UI components to develop view.

//JSX
//JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. We can write HTML structures with JavaScript
//code.
import React from "react";
const React_Refresher = (props) => {
  //This is JSX
  return (
    <div>
      <h1>Hello {props.text}</h1>
    </div>
  );
};

export default React_Refresher;

//Element vs Component
//Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements
//in their props.
//Once an element is created it is never mutated.

const element = React.createElement("div", { id: "loginBtn" }, "Login");

const Component = ({ onLogin }) => {
  return (
    <div id="loginBtn" onClick={onLogin}>
      Login
    </div>
  );
};

//Two ways of creating components
//1. Functional components
function Greeting({ message }) {
  return <h1>{`Hello ${message}`}</h1>;
}

//2. Class component
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello ${this.props.message}`}</h1>;
  }
}

//Pure Components
//React.PureComponent is same as React.Component except that it handles the shouldUpdateComponent() method for us. When props or state changes,
//PureComponent will do a shallow comparison on both props and state while the regular Component does not.
//Hence, the component will re-render by default whenever we call shouldComponentUpdate

//State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to minimize the
//number of stateful components.
//State is like a variable in JS
import { useState } from "react";
const [isModalOpen, setIsModalOpen] = useState(false);

//Updating state
//You should not update state directly because the component won't re-render

//Props
//Props are inputs to components. They are single values or objects containing a set of values that are passed to components.
//The data are passed from the parent component to a child component.
//Props are like function parameters in JS
//here we are sending a prop
<React_Refresher text="World" />;
//HTML event handling vs React event Handling
//onclick=doSomething() vs onClick={doSomething} inside doSomething we should always do event.preventDefault()
const signUpHandler = () => {
  setIsModalOpen(true);
  console.log("SignUp Clicked");
};
const buttonComponent = () => {
  return <button onClick={signUpHandler}>Sign Up</button>;
};

//Synthetic events
//SyntheticEvent is a cross-browser wrapper around the browser's native event. It also includes the stopPropogation() and preventDefault() methods.
//The events work identically across all browsers

//inline conditional expression
// using && inside curly braces
//{isLoggedIn && <h1>You are logged in </h1>}

//key prop
//A key is a special string attribute you should include when creating arrays of elements. Key prop allows React to identify which items have been changed,
//added, or removed.
const eachItem = list.map((item) => {
  return <li key={item.id}>{item.name}</li>;
});

//Adding routing
//npm i react-router-dom
//import {BrowserRouter} from "react-router-dom"
//We wrap our <App/> in index.js with <BrowserRouter></BrowserRouter>

//In the App.js file
//import {Route, Switch} from "react-router-dom"
//We would then import all the pages that we will show based on the route
//If we do not wrap our Routes with Switch then React will load the MainPage and NewPage when we visit /new
function App() {
  return (
    <div>
      <Switch>
        {/* We added the exact keyword because React would render the MainPage even if we go to /new since /new contains / */}
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/new">
          <NewPage />
        </Route>
      </Switch>
    </div>
  );
}

//Creating a navbar
//import {Link} from "react-router-dom"
function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">MainPage</Link>
          </li>
          <li>
            <Link to="/new">NewPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

//Adding styling using CSS modules
//This will create a scope for a specific component by creating a unique id for each styling
//MainPage.module.css
//import classes from "./MainPage.module.css"
//this classes will be an object