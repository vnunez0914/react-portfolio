import React, {Component} from 'react';
import Social from '../Components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>

                <h3>Email : < a className="contactLink" href="mailto:vnunez0914@gmail.com">vnunez0914@gmail.com</a></h3>
                <h3>LinkedIn : < a className="contactLink" href="https://www.linkedin.com/in/victor-x-nunez/" target="_new">victor-x-nunez</a></h3>

                <Social />
            </div>
        )
    }
}

export default Contact 