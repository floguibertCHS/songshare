import React, { Component } from 'react';
import PlayListItem from './PlayListItem';


export default class PlayList extends Component {

constructor(props) {
  super(props);

  this.fetchData = this.fetchData.bind(this);

  this.state = {
    songs: []
  };
}

componentDidMount() {
fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
  .then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData(e) {
   e.preventDefault();
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
     return results.json();
   }).then(data => {
     this.setState({songs: data});
   })
  }
render() {
  return (
  <section>
  <div>
    <button href="#" type="button" onClick={this.fetchData} className="btn btn-warning col-3">Update Song List</button>
  </div>

    {this.state.songs && this.state.songs.map(song => {
        return <PlayListItem song={song} key={song._id} />
      })}
  </section>

  );
}
}
