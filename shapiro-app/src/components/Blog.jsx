import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div id="blog">
     <p>Check out my blog <a href="https://aectnyc.tumblr.com/"> here!</a></p>


      <div class="tri" id="two">
      <a target="_blank" href="https://aectnyc.tumblr.com/"><img class="lasers" src="https://imgur.com/vWjf6gD.png"/> </a>
      </div>

    </div>
    );
  };
}

export default Blog;
