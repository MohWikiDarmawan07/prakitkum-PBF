
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Test from './Test';
import App from './App';
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';
import Login from './Login';

ReactDOM.render(<Login />, document.getElementById('root'));

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// Statefull Component 
// class StateFullComponent extends React.Component {
//   render() {
 //     return <p>StateFull Component</p>
 //   }
 //}

 //ReactDOM.render(<StateFullComponent />, document.getElementById('root'));

// Stateless Component
// function HelloComponent() {
//     return <p>Hello Component</p>
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//ReactDOM.render(<Test />, document.getElementById('root'));
ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
