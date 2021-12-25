//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import SimpleForm from './component/chatbot/SimpleForm';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
;
class App extends Component {
  render() {

  

    return (
      <Router>
      
       
        
        <SimpleForm />
        
        
        </Router>
    );
  }
       
}
export default App;
