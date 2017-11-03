import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div id="blog">
     <p>Check out my blog here!</p>
      <div class="tri" id="two">
      <img src="https://imgur.com/vWjf6gD.png"/>
      </div>
      <div class="tri" id="three">
      <img src="https://i.imgur.com/lhtK9sK.png"/>
      </div>
    </div>
    );
  };
}

export default Blog;
