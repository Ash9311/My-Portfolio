import React from "react";
import './NavBar.css';
import {slide as Menu} from 'react-burger-menu';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    state = {}
    render() {
        return ( 
            <Menu>
                {/* we never want to use <a> tag inside react router application */}
                {/* <a id="home" className="menu-item" href="/">Home</a> */}
                <Link to="/" className="menu-item active-item">Home</Link>
                <Link to="/about" className="menu-item">About</Link>
                <Link to="/projects" className="menu-item">Projects</Link>
                <Link to="/skills" className="menu-item">Skills</Link>
                <Link to="/contact" className="menu-item">Contact</Link>
               
            </Menu>
        );
    }
}
export default NavBar;