import React, {Component} from 'react';

class Skills extends Component {

    constructor(props) {

        super(props);
        this.state= {
            mySkills: ['HTML', 'CSS', 'Javascript', 'React.JS', 'MongoDB', 'Express.JS', 'Node.JS', 'JQuery', 'mySQL']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                   {this.state.mySkills.map((value) => {
                       return <li>{value}</li>
                   })}
                </ul>

            </div>
        )
    }
}

export default Skills