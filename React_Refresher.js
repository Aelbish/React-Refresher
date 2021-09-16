//React is an open-source JavaScript library which is used for building user interfaces especially for single page applications (SPA) .

//We write our react code but it gets transformed in the build step where the code is transformed so that the browsers understands it.

//Created by a Facebook engineer named Jordan Walke.
//React is all about components
//Components help for reusability and separation of concerns

//We write code in a declarative component based way
//Define the desired target states and let React figure out the actual JS DOM instructions

//Website to learn the BASICS, to grasp the basic details, to set up the pillars for REACT
//https://www.taniarascia.com/getting-started-with-react/

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
//className is used to define class for adding CSS
//properties and methods are camel-case i.e. onClick instead on onclick
//{} is used to add JS in JSX
//functional component is also called simple component, there is class component also which uses render(){return ()}

//Simple component
//useEffect() with empty dependency can work as componentDidMount to render once, which will work as a replacement for componentDidMount
const SimpleComponent = () => {
  return <div>SimpleComponent</div>;
};

//Class component
//The lifecycle method componentDidMount is called right after the first render completes.
class ClassComponent extends React.Component {
  render() {
    return <div>ClassComponent</div>;
  }
}

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

import { array } from "prop-types";
import React from "react";
const React_Refresher = (props) => {
  const propValue = props.text;
  //This is JSX
  const heading = <h1>Hello, React</h1>;
  //No JSX, JSX will do this behind the scenes
  const heading1 = React.createElement(
    "h1",
    { className: "someClass" },
    "Hello, React"
  );
  return <div>{heading}</div>;
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
//Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only.
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
  //The onClick function must pass through a function that returns the prop method, otherwise it will try to run automatically.
  //if we were trying to execute a function from a prop we would do something like below
  //return <button onClick = {() => props.someFunction}>Hello</button>
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

//Creating our wrapper component
function Card(props) {
  //children always holds the values that we pass between the wrapper component
  return <div>{props.children}</div>;
}

//Handling a form submission
function formSubmitHandler(event) {
  event.preventDefault();
  const enteredTitle = titleInputRef.current.value;
}

//Fetching Data
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function sendData() {
  fetch("url", {
    method: "POST",
    body: JSON.stringify(yourObject),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      history.replace("/");
    })
    .catch((e) => {
      console.log(e);
    });
}

function getData() {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  //having no dependency i.e. an empty dependency array results to the function inside useEffect get executed only once
  //that once is when the component is rendered and the function is executed for the first time.
  //After that the function inside useEffect won't be executed for re-renders if the dependency array is empty
  useEffect(() => {
    fetch("url")
      .then((res) => {
        //this also returns a promise
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, []);
}

//HOOKS
//useRef hook
//useRef hook is used to get the value from the inputs
//import {useRef} from "react";
//const titleInputRef = useRef();
//<input type="text" id="title" ref={titleInputRef}/>

//You do not directly connect to the database in React due to security reasons, since we can view the React code in the console.
//We only send requests to the API

//useState is used to maintain local states in functional components
//when we set the state or update the state the component will be re-rendered i.e. the functional component will run again
//Hence, if we are sending a get request without using useEffect with empty dependency, the fetch function will run again
//and again which will create infinite loop, hence we add the fetch to get data inside useEffect with empty dependency

//useEffect is used to  execute functions after a component is rendered to perform "side effects"
//having no dependency i.e. an empty dependency array results to the function inside useEffect get executed only once
//that once is when the component is rendered and the function is executed for the first time.
//After that the function inside useEffect won't be executed for re-renders if the dependency array is empty

//useHistory hook for re-routing
