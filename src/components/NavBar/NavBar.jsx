import React from "react";
import './NavBar.css';
import {slide as Menu} from 'react-burger-menu';

class NavBar extends React.Component {
    state = {}
    render() {
        return ( 
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/projects">Projects</a>
               
            </Menu>
        );
    }
}
export default NavBar;