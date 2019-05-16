import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
      console.log('App - NavBar');
        return ( <nav className="navbar navbar-light bg-light">
        <h1>NavBar
          <span className="badge badge-pill bedge-secondary">{ this.props.totalCounters }</span>
        </h1>
      </nav> );
    }
}
 
export default NavBar;