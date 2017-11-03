import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      <p id='title'>Brad Shapiro</p>
        <nav>


       <div class="dropdown">
  <span>Menu</span>
  <div class="dropdown-content">
    <ul>
         <li><Link to="/blog">Blog</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>

       </ul>
  </div>
</div>
 </nav>
      </header>
    );
  };
}

export default Header;
