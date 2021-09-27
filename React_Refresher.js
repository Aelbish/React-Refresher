//React is an open-source JavaScript library which is used for building user interfaces especially for single page applications (SPA) .

//We write our react code but it gets transformed in the build step where the code is transformed so that the browsers understands it.

//Created by a Facebook engineer named Jordan Walke.
//React is all about components
//Components help for reusability and separation of concerns

//We write code in a declarative component based way
//Define the desired target states and let React figure out the actual JS DOM instructions

//Website to revise the BASICS, to grasp the basic details, to set up the pillars for REACT
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

//Why do we use callback or anonymous functions for event handlers
//All JavaScript event handlers use an anonymous callback function, 
//this isn’t a React-specific thing: JS uses callbacks to allow you to do one thing (pick up a click event for example) 
//then do another thing (fire a handler function). React follows the exact same pattern, as it’s how the language APIs…

//JSX
//JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. We can write HTML structures with JavaScript
//code.
//className is used to define class for adding CSS
//properties and methods are camel-case i.e. onClick instead on onclick
//{} is used to add JS in JSX
//functional component is also called simple component, there is class component also which uses render(){return ()}

//In-line styling in React: <h1 style={{ color: "red" }}>React Hooks Practice</h1>

//stateful/smart vs stateless/presentation/dumb component

//controlled vs uncontrolled components
//when we use useRef to get the values from <input> that input is uncontrolled, because the value is not controlled by React
//A Uncontrolled Component is one that stores its own state internally, 
//and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

//when we do two way binding with useState on <input> that input is controlled
//A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. 
//A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to 
//the controlled component. You could also call this a "dumb component".


//Two-way binding: Binding the current state with the current input value and vice-versa
//const [name, setName] = useState("");
const formSubmitHandler = (event) => {
  event.preventDefault();
}
//<input type="text" id="name" value={name} onChange={(event)=> {setName(event.target.value)}}/>
//Here we have acheived two-way binding

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
    setIsLoading(true);
    fetch("url")
      .then((res) => {
        //this also returns a promise
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        //what if we get objects instead of array of objects
        //Converting objects into array of objects
        //Example: From firebase, we get objects like {xisSUSKJHD:{property1:"ad", property2:"ad"}}, {ccsUSUHDKDJKL:{property1:"ad", property2:"ad"}}
        const dataArray = [];
        for (key in data) {
          const data = {
            id: key, //assuming oneData is a key like in Firebase
            ...data[oneData],
          };
          dataArray.push(data);
        }
        setData(dataArray);
      });
  }, []);
}

//Rules for using Hooks
//1. Hooks should only be used inside functional components or custom hooks
//2. Always use the hooks in the root level of the component, we cannot use it (useState()) inside a function or if statement

//HOOKS
//React hooks can only be used in functional components
//useRef hook
//useRef hook is used to get the value from the inputs
//import {useRef} from "react";
//const titleInputRef = useRef();
//const enteredTitle = titleInputRef.current.value;
//<input type="text" id="title" ref={titleInputRef}/>

//You do not directly connect to the database in React due to security reasons, since we can view the React code in the console.
//We only send requests to the API

//useState is used to maintain local states in functional components
//setState is asynchronous, you can't expect the updated state value just after the setState
//hence, if we are updating the state based on previous state or our update depends upon the previous state we should access the previous latest snapshot of the state
const [arrayData, setArrayData] = useState([]);

setArrayData((prevData)=>([...prevData.push(1)]))

//import {useState} from "react";
//const [items, setItems] = useState([]);
//useState returns an array with two elements: the current state as the first element of the array and a function to set the state as the second element
//when we set the state or update the state the component will be re-rendered i.e. the functional component will run again
//so, the useState will be re-computed, however React manages the state separately from the functional component, so the state will survive the re-render
//useState is a hook used to manage the state which returns an array with exactly two elements
//the current state and state updating function
//whenever the state changes the component is re-rendered i.e. the component will re-run
//useState will also be re-executed but
//the state will survive the re-renders since React manages the state separately
//the useState will manage the state separately so the value of the state won't be lost if re-rendered
//Hence, if we are sending a get request without using useEffect with empty dependency, the fetch function will run again
//and again which will create infinite loop, hence we add the fetch to get data inside useEffect with empty dependency

//             <input
//               type="number"
//               id="amount"
//               value={inputState.amount}
//               onChange={(event) => {
//                 //Notice how we have grabbed the event.target.value outside of the setInputState
//                 //if we had accessed the event.target.value inside setInputState for the amount
//                 //due to the closure property of JS we would have only gotten the value of the
//                 //first keystroke
//                 //React reuses the event objects does not recreate it for every keystroke
//                 const enteredAmount = event.target.value;
//                 setInputState((prevState) => ({
//                   title: prevState.title,
//                   amount: enteredAmount,
//                 }));
//               }}
//             />

//Consider this code:

//console.log(name); // prints name state, e.g. 'Manu'
//setName('Max');
//console.log(name); // ??? what gets printed? 'Max'?
//You could think that accessing the name state after setName('Max'); should yield the new value (e.g. 'Max') 
//but this is NOT the case. Keep in mind, that the new state value is only available in the next component 
//render cycle (which gets scheduled by calling setName()).

//React will batch multiple state updates together to avoid uncessary re-renders
//for example
//const clearError = () => {
//  setError(null);
// setIsLoading(false);
//}
//here, react will batch these two state updates together (if these setStates are synchronous) and the component will not re-render twice

//useEffect is used to  execute functions after a component is rendered to HANDLE "side effects"
//import {useEffect} from "react";
//useEffect(() => {//function}, [dep1, dep2])
//eliminating dependency array, the function inside the useEffect runs after every component update
//An empty dependency array results to the function inside useEffect get executed only once, so like componentDidMount
//that once is when the component is rendered and the function is executed for the first time.
//After that the function inside useEffect won't be executed for re-renders if the dependency array is empty
//If we had dependencies useEffect will check if the previous state and the current state of the dependencies has changed and if so will execute the function
//inside useEffect(() => {}, [dep1, dep2])
//RULE: Any external values we used inside of the useEffect should be added to the dependency array, however, setState functions are exceptions
//we can also add a cleanup function, the cleanup function will run before the useEffect gets executed again if there are dependencies
//the cleanup function will run when the component gets unmounted if it has an empty array as dependency

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchTitle === inputRef.current.value) {
//         const query =
//           searchTitle.length === 0
//             ? ""
//             : `?orderBy="title"&equalTo="${searchTitle}"`;
//         fetch(
//           "https://react-hooks-practice-cc089-default-rtdb.firebaseio.com/ingredients.json" +
//             query
//         )
//           .then((response) => {
//             return response.json();
//           })
//           .then((responseData) => {
//             const loadedData = [];
//             for (const key in responseData) {
//               loadedData.push({
//                 id: key,
//                 title: responseData[key].title,
//                 amount: responseData[key].amount,
//               });
//             }
//             //when we execute the function below which was passed from Ingredients.js
//             //we will update the state of the Ingredient.js file, which will re-execute Ingredients component
//             //Hence, all the functions will be re-created in a different address
//             //hence, this function inside this useEffect will re-run since onFilteredIngredients changed
//             //And this cycle will continue for infinity
//             //Hence, we will use useCallback
//             onFilteredIngredients(loadedData);
//           });
//       }
//     }, 500);
//     return () => {clearTimeout(timer)}
//   }, [searchTitle, onFilteredIngredients, inputRef]);

//useReducer
//handle complex states
//handle states that are closely related
//used to handle multiple state changes, maybe one state needs to change based on the other state change
//reducer function is defined outside of our component 
//the reducer function will handle all the conditions for each action.type
//the reducer funcion takes the current state object as the first arugment and an action typically an object as a second argument
//const ingredientReducer = (currentIngredients, action) => {
//if (action.type === "SET") {
//  return action.ingredients;
//}
//else if (action.type === "ADD") {
//  return [...currentIngredients, action.ingredients];
//}
//else if (action.type === "DELETE") {
//  return currentIngredients.filter((item) => (item.id !== action.id));
//}
//else {
//  return "Something went wrong"
//}
//}
 
//then we call the useReducer hook inside the component
//the useReducer is like a stronger version of useState
//use reducer also returns an array with two elements like useState()
//the first element is the current state and the second element is a dispatcher which will be used to dispatch an action
//the dispatch will allow us to change the state with the help of the reducer function we have defined
//the dispatch will use the reducer function to "set" the state
//useReducer takes the reducer function we defined eariler as the first argument, the starting state which is optional as the
//second argument (the starting state could be an object),
//const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

//dispatching the action
//dispatch({type:"SET", ingredients})
//dispatch({type:"ADD", ingredients:{id:, name:, amount:}})

//useHistory hook for re-routing
//import {useHistory} from "react-router-dom";
//const history = useHistory();
//history.push("/") or history.replace("/")
//use push if we want the user to have the ability to return back to the previous page or else use replace. The path or route gose inside ""

//Context in react
//We could lift the state up i.e. maybe move the userState to for example, App.js and pass the userState as a prop to other components, but
//in larger applications this might not be a good use case, so we use context.
//Context is used to to manage state for application wide state.
//Context is a JS object
//We generally create a folder called store
//Here we can create context js files, for example: user-context.js
//In user-context.js
import { createContext, useState } from "react";
//this createContext() takes initial values as argument which could be an object
//this will be like a blueprint
const UserContext = createContext({
  id: "",
  userName: "",
  email: "",
  favorites: [],
  addUser: () => {},
  removeUser: () => {},
  addFavorites: () => {},
  removeFavorites: () => {},
});

//Note:the part below is like a FUNCTIONAL COMPONENT which will manage a state that will be available to components which ask for it
//to actually allow other components to use this context we need to create a provider, the provider also allows to update the context by other components
//We export this functional component which will be used by components that need this context
export function UserContextProvider(props) {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [favorties, setFavorties] = useState([]);

  //these functions will allow us to update the context object

  //let us assume that we get a user object as props for the function below
  function addUserHandler(userObject) {
    setId(userObject._id);
    setUserName(userObject.name);
    setEmail(userObject.email);
    setFavorties(userObject.favorites);
  }

  function removeUserHandler() {
    setId("");
    setUserName("");
    setEmail("");
    setFavorties([]);
  }

  function addToFavoritesHandler(favorite) {
    //NOTE: VERY IMPORTANT, when the state updating depends on the previous state we should always access the previousState and update on that
    //When we use useState to update the state, React schedules the state update behind the scenes and may not be instant
    //Hence if we just did setFavorites(favorites.concat(favorite)) we might not have the latest snapshot of the favorites array which might cause unwanted errors
    //Hence, we access the previousState and update the array based on the previousStateArray
    //THIS IS THE BEST PRACTICE TO UPDATE THE STATE BASED ON PREVIOUS STATE
    setFavorties((prevFavoriteArray) => {
      return prevFavoriteArray.concat(favorite);
    });
  }

  function removeFromFavoritesHandler(id) {
    setFavorties((prevFavoriteArray) => {
      return prevFavoriteArray.filter((eachFavorite) => {
        //returns true for all favorites except the one we want to remove, hence the one we want to remove will return false and will be filtered out
        //of the newly returned array, it does not change the original array
        eachFavorite.id !== id;
      });
    });
  }

  //Here we are managing or setting the context object based on the states we have managed for different values
  const context = {
    //key id and value is state(useState) id
    id: id,
    userName: userName,
    email: email,
    favorties: favorties,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    addFavorites: addToFavoritesHandler,
    removeFavorites: removeFromFavoritesHandler,
  };

  //We pass the managed state i.e. context with value keyword to the components that require this context
  //Hence if this context i.e. managed application wide state changes all the components using this context will be re-evaluated or re-rendered.
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
//this is the end of the user-context.js file
//here we have created something like a wrapper component, hence if we want the entire app to have access to the user context
//import {UserContextProvider} from "path";
//we can wrap <App/> with <UserContextProvider><App/></UserContextProvider> which allows <App/> to listen and interact with this context

//useContext
//import {useContext} from "react";
//import UserContext from "path";
//NOTE: the above import is the default export of user-context.js not the functional component export
//this userCtx will contain the context object with the values and functions we have defined 
 const userCtx = useContext(UserContext);
//We can access the values like this
 const userName = userCtx.userName;
 //using the functions defined in the context
 function LoginHandler() {
   userCtx.addUser(passAnObject);
 }
 function LogoutHandler() {
   userCtx.removeUser(passAnId);
 }

 //useCallback
//    const filteredIngredients = useCallback((filterededIngredients) => {
//     setUserIngredients(filteredIngredients);
//   }, []);
//useCallback is used to ensure that the function is not re-created when the component is re-rendered
//refer to Ingredients.js file along with Search.js
 
 //React.memo
 //This is like PureComponent in class component
 //React.memo() is used to wrap a component which memoized the rendered output of the wrapped component then skips unnecessary renderings
 //Only re-renders if the props is changed
 //By default does a shallow comparision
 //Hence we can pass a second argument with customized function which should return true if prevProps and nextProps are equal
 const funcComponent = (props) => {}
 export default funcComponent = React.memo(funcComponent, optionalEqualityCheckerFunction)
 
 //useMemo and useCallback
 //useCallback for functions, useMemo for values
 
 //custom Hooks
 //custom hooks allows us to reuse functions, states that are used by several components
 //NOTE:Each component that utilizes our custom hook will have its own snapshot of the states, the state won't be shared between the components using the same custom hook
 //Our hook will get called everytime the component using our hook is executed or re-rendered, so we can make a new function inside the useHttp to fetch data
 //instead of just fetching data inside useHttp. this will ensure that the fetch is not run on every re-render
 const useHttp = () => {
 
 //we need to return anything probably an object which will allow the components to get access to the useHttp states, functions.
 return {}
 }
 export default useHttp;
 //using the custom Hook
 //const {isLoading, httpError, sendRequest} = useHttp();

  //Redux
 //Third party library
 //State management system for cross-component or app-wide state

 //States in react
 //1. Local State: state that belongs to a single component, managed internally in a component using useState or useReducer
 //2. Cross-component state: state that affects multiple components, eg:open/closed state of a modal overlay, this will require "props chain" or "props drilling"
 //3. App-Wide State: state that affects the entire app(most/all components), eg:user authentication, requires "prop drilling" which can become cumbersome,
 //hence we used context API
 //We can also use redux

 //Why use Redux is we can do it with Context API?
 //React context might have POTENTIAL disadvantages
//1. Using context and managing context can be difficult in a large application, can end up with deeply nested JSX code
//2. For high frequency changes React context is not good. Can have performance issue

 //We can use Context and Redux together

 //Redux is all about having a central data(state) store. We just have one store which will handle all the app-wide states

 //Components that require the app-wide state will subscribe to the redux store and whenever the data changes Redux store notifies the components and supply the
 //component with the data, the component gets a slice of Redux store

 //How to change the Redux store data?
 //NOTE: Components NEVER directly manipulate the data in the store
 //For changing the Redux store data we use Reducers
 //Reducer functions will mutate or change the Store Data, this is not useReducer

 //How Redux works?
 //Components are connected with Reducer functions which will manipulate the Store Data.
 //Components dispatch Actions, components trigger certain actions
 //Redux will forward that action (which describes what to do) to the reducer function to perform the desired changes in the store Data
 //Then the reducer will spit out a new state which will replace the existing state in the Data Store
 //The subscribing components will be notified so that the components can update the UI

 //npm i redux
//in node
const redux = require("redux");

//Creating a reducer function
//Reducer function will spit out the initial state, also mutates the state, reducer function manages the data
//Reducer function takes in two inputs that are provided by redux: Old state i.e. the current state and Dispatched Action
//Reducer function always returns a new state object
//Hence, reducer function must be pure i.e. for the same input it should spit out the same output
//we must define a default value for the initial state in the Reducer function
//else when the reducer function runs for the first time, accessing state.counter would be undefined
const counterReducer = (state = {counter:0}, action) => {
  //we can update the state based on the type of action
  if (action.type === "increment") {
    return {counter: state.counter + 1};
  }
  if (action.type === "decrement") {
    return {counter:state.counter - 1};
  }
  //default action of the reducer function
  return state;
};

 //Creating a store in Redux
 //we need to pass the reducer function as the argument for creating store
const store = redux.createStore(counterReducer);

//Subscriber or a component: a function that uses the store data
const counterSubscriber = () => {
  //we can get the latest snapshot of the state from the Store with store.getState()
  const latestState = store.getState();
  console.log(latestState);
};

//We need to make Redux aware of the subscriber function, and tell it that the store.getState()
//from the counterSubscriber needs to be executed whenever there is a state update
store.subscribe(counterSubscriber);

//method that dispatches an action, the action which will be taken by Reducer function to 
//update the state
//action is a JS object with a type property
//when we run a dispatch it will run the Reducer function to update the state
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});

//Fun fact: redux can be used with NOT JUST REACT

//hence to make Redux recognize react we also npm i react-redux

