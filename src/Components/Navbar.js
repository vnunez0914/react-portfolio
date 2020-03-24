import React, {Component} from 'react';
import NavItem.js from './NavItem';

class NavBar extends Component {
    render(){
        return(
            <nav>
                {/* NavItem holds two props (item and tolink). "item" holds the nav name and "tolink" prop holds the nav route */}
                <ul>
                    <NavItem item="Home" tolink="/" ></NavItem>
                    <NavItem item="About" tolink="/about" ></Navitem>
                    <NavItem item="Education" tolink="/education" ></NavItem>
                    <NavItem item="Skills" tolink="/skills" ></NavItem>
                    <NavItem item="Contact" tolink="/contact"></NavItem>
                </ul>
            </nav>
        )
    }
}

export default NavBar