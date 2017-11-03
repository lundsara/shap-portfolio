import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
      <div class="container">

      <div id="contact">
     <p> Connect with me... </p>

     <p class="sociallink"> <a href="mailto:brad.c.shapiro@gmail.com"><span class="highlight">email:</span> brad.c.shapiro@gmail.com</a></p>
     <p class="sociallink"> <a target="_blank" href="https://www.instagram.com/brad_shapiro/"><span class="highlight">instagram:</span> @brad_shapiro</a></p>
     <p class="sociallink"> <a target="_blank" href="https://www.linkedin.com/in/brad-shapiro-12b40865/"><span class="highlight">linkedin:</span> www.linkedin.com/in/brad-shapiro</a></p>
    </div>
    </div>
    );
  };
}

export default Contact;
