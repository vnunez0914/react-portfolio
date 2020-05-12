import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySkills: [
        "HTML",
        "CSS",
        "Javascript",
        "React.JS",
        "MongoDB",
        "Express.JS",
        "Node.JS",
        "JQuery",
        "mySQL",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.mySkills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <br></br>
        <h1>Projects</h1>
        <br></br>
        <a href="https://shrouded-falls-90324.herokuapp.com/" target="_blank">
          <h2>FitFix- demo</h2>
        </a>
        <h4>
          - Built with MongoDB, Express, React, Node, Javascript, CSS, HTML5,
          Mongoose (npm), Heroku (host), Node Package Manager.
        </h4>
        <h3>
          Github Repo:  
            <a class="links" href="https://github.com/joe8021/project3" target="_blank">
             click here
          </a>
        </h3>
        <p>
          Fit fix is a fitness application that help people start there fitness
          journey. Get access to workout templates that provide recommended sets
          and repetitions. Each exercise is paired with instructions and a demo
          video. Track weight and save your favorite exercises.
        </p>
          <br></br>
        <a
          href="https://hangry-squad.github.io/Hanger-Management/"
          target="_blank"
        >
          <h2>Hangry Management- demo</h2>
        </a>
        <h4>
          - Built with Javascript, Jquery, CSS, HTML5, Bootstrap, Flexbox.
        </h4>
        <h3>
          Github Repo: 
            <a class="links" href=" https://hangry-squad.github.io/Hanger-Management/" target="_blank">
             click here
          </a>
        </h3>
        <p>
          Hangry Management is a one-stop shop for recipes. With our
          user friendly interface, users are able to find top recipes for their
          favorite dishes, or browse for exciting new ones to try. It also
          instantly provides users with the full nurtitional values of all the
          ingredients.
        </p>
          <br></br>
        <a href="https://vnunez0914.github.io/crystal-game/" target="_blank">
          <h2>Crystal Game- demo</h2>
        </a>
        <h4>
          - Built with Javascript, Jquery, CSS, HTML5.
        </h4>
        <h3>
          Github Repo: 
            <a class="links" href="https://github.com/vnunez0914/crystal-game" target="_blank">
             click here
          </a>
        </h3>
        <p>
          Interactive game where the players crystal value must match the
          generated number without going over.
        </p>
          <br></br>
        <a href="https://fast-retreat-63330.herokuapp.com/" target="_blank">
          <h2>Eat-Da-Burger- demo</h2>
        </a>
        <h4>
          - Built with Javascript, Jquery, CSS, HTML5, Bootstrap, Node, MySQL, Node Package Manager, Heroku, Express.
        </h4>
        <h3>
          Github Repo: 
            <a class="links" href="https://github.com/vnunez0914/burger" target="_blank">
             click here
          </a>
        </h3>
        <p>
          Eat-Da-Burger! is a restaurant app that lets users input the names of
          burgers they'd like to eat. Whenever a user submits a burger's name,
          the app will display the burger on the page-- waiting to be devoured.
          Each burger in the waiting area also has a EAT IT! button. When the
          user clicks it, the burger will move to a read only faded text at the
          bottom. The app will store every burger in a database, whether
          devoured or not.
        </p>
          <br></br>
        <a href="https://vnunez0914.github.io/Gif-or-Jif/" target="_blank">
          <h2>Gif or Jif- demo</h2>
        </a>
        <h4>
          - Built with Javascript, Jquery, CSS, HTML5.
        </h4>
        <h3>
          Github Repo: 
            <a class="links" href="https://github.com/vnunez0914/Gif-or-Jif" target="_blank">
             click here
          </a>
        </h3>
        <p>
          Gif or Jif? is a search engine that uses the Giphy API and ajax. The
          user types in what they want to search and it turns into a button
          which can be clicked
        </p>
          <br></br>
        <a href="https://github.com/vnunez0914/liri-node-app" target="_blank">
          <h2>LIRI Bot (command line app)</h2>
        </a>
        <h4>
          - Built with Javascript, API, Node, Node Package Manager, Axios(npm package).
        </h4>
        <h3>
          Github Repo: 
            <a class="links" href="https://github.com/vnunez0914/liri-node-app" target="_blank">
             click here
          </a>
        </h3>
        <p>
          LIRI is like iPhone's SIRI. However, while SIRI is a Speech
          Interpretation and Recognition Interface, LIRI is a Language
          Interpretation and Recognition Interface. LIRI will be a command line
          node app that takes in parameters and gives you back data.
        </p>
      </div>
    );
  }
}

export default Skills;
