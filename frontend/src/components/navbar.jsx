import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    
 return <nav className=" navbar bg-dark container">
 
 <h1><Link className="Link" to="/">Home</Link></h1>
 <h1><Link className="Link" to="/notes">Notes</Link></h1>
 <h1><Link className="Link" to="/create">Create</Link></h1>
 </nav>
    
}
export default Navbar;