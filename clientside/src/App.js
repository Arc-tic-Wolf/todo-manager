import React from "react";


import TodoList from "./components/Todos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            

            <Route exact path="/" element={<TodoList/>}>
              
            </Route>

            

            

            
            
            
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;

