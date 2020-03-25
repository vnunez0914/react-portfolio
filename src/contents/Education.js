import React, { Component } from "react";
import WideCard from "../Components/WideCard"

class Education extends Component {

  render() {

    return (

      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <WideCard title="Full Stack Web Development " where="Northwestern University" from="August 2019" to="November 2019" />
        
      </div>
    );
  }
}

export default Education
