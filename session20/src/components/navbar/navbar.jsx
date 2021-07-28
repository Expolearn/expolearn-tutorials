import React, {Component} from 'react';
import home from "../home/home";
import about from "../about/about";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                <ul>
                    <li> <a href='../home/home'> Home Page</a> </li>
                    <li> < a href='../about/about'> about Page </a></li>
                    <li> contact Page</li>
                </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
