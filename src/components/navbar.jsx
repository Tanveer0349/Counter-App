import React, { Component, Fragment } from 'react';
class NavBar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-light bg-light"><a className="navbar-brand" href="#">
            Total Counters <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
        </a></nav>
        );
    }
}
 
export default NavBar;