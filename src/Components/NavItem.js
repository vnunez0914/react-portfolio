import React, {Component} from 'react';
// Link is imported from react-router-dom npm package and acts as an <a>
import {Link} from "react-router-dom";

class NavItem extends Component {
    render() {

        //  setting "item" and "tolink" props to the Link component.
        return (
            <li>
                <Link to={this.props.tolink} >
                    {this.props.item}
                </Link>
            </li>
           
        )
    }
}

export default NavItem
