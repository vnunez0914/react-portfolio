import React, { Component } from "react";
import NavItem from "./NavItem";



class NavBar extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      NavItemActive: ''
    };
  }
  // activeitem() will be sent to NavItem component and wiil be called whenever NavItem "activec" is clicked
  activeitem = (x) => {

    if (this.state.NavItemActive.length > 0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({ NavItemActive: x }, () => { document.getElementById(this.state.NavItemActive).classList.add('active');

    });

  };

  render() {

    return (

      <nav>
        {/* NavItem holds two props (item and tolink). "item" holds the nav name and "tolink" prop holds the nav route */}
        <ul>
          <NavItem item="Home" tolink="/" activec={this.activeitem}></NavItem>
          <NavItem item="About" tolink="/about" activec={this.activeitem} ></NavItem>
          <NavItem item="Education" tolink="/education" activec={this.activeitem} ></NavItem>
          <NavItem item="Skills/Projects" tolink="/skills" activec={this.activeitem} ></NavItem>
          <NavItem item="Contact" tolink="/contact" activec={this.activeitem} ></NavItem>
        </ul>

      </nav>
    );
  }
}
export default NavBar;
