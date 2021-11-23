import React from "react";
import './navbar.css';

const Navbar = () => {
   return (

        <div className="demari__navbar">
            <div className="demari__navbar-logo">
                <h1>Demari</h1>
            </div>
            <div className="demari__navbar-links">
                <h3>About Me</h3>
                <h3>Book List</h3>
                <h3>Contact</h3>
            </div>
        </div>

   )
}

export default Navbar;