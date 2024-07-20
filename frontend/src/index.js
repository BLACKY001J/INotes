import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));    // entry point 
// ReactDOM.createRoot() to create a root instance, which represents the root of the React tree. 
// The argument passed to createRoot() is the DOM element where the React application will be mounted. 
// In this case, it's assumed that there's an HTML element with the id "root" in the document


root.render(                             //root.render(): This method is called on the root instance to render React elements into the DOM. It takes a single argument, which is the JSX code that describes the UI structure of the application.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
