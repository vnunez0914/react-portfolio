import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/portfolioPhoto.JPEG';

class Home extends Component {
    render() {
        return (

         <div className="condiv home">
             <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Victor Nunez','I am a Full Stack Web Developer']} speed={100} eraseDelay={700}/>
            </div>
        )
    }
}
export default Home;