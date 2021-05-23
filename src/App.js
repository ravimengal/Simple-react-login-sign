import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Mycomponents/Login/Login";
import Signup from "./Mycomponents/Signup/Signup";
import Home from "./Mycomponents/Home/Home";
function App() {
  return (
    <div >

      <Router>

        <div className="Header">
          <Link to="" style={{textDecoration:'none', color:'#FFF'}}>Home</Link>
          <Link to="login" style={{textDecoration:'none',color:'#FFF'}}>Login</Link>
          <Link to="signup" style={{textDecoration:'none',color:'#FFF'}} >Signup</Link>
        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />











      </Router>
    </div>


  );
}

export default App;
