import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Play What?!</h1>
            <hr className="my-4"/>
            <p className="lead">Share the songs you love.</p>
          </div>
        </div>
      </div>
    );
  }
}
