import React, { Component } from "react";
import Navitem from "./Navitem";



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: ""
    };
  }
  // activeitem() will be sent to NavItem component and wiil be called whenever NavItem "activec" is clicked
  activeitem = x => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemId: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        {/* NavItem holds two props (item and tolink). "item" holds the nav name and "tolink" prop holds the nav route */}
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem item="About" tolink="/about" activec={this.activeitem} ></Navitem>
          <Navitem item="Education" tolink="/education" activec={this.activeitem} ></Navitem>
          <Navitem item="Skills" tolink="/skills" activec={this.activeitem} ></Navitem>
          <Navitem item="Contact" tolink="/contact" activec={this.activeitem} ></Navitem>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
