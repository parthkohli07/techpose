import React from "react";
import Navbar from "./components/navbar";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Create from "./components/Create";
function App() {
  return (

  <Router>
       <Navbar />
      <Route path="/" exact>
       <Home />
      </Route>
      <Route path="/notes">

      <Notes />
      </Route>
      <Route path="/create">
      <Create />
      
      </Route>
  </Router>
  )
  
}

export default App;
