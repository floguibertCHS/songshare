import React, { Component } from 'react';
// import PlayList from './PlayList';


class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { song } = this.props;
    console.log(this.props);
    return (

      <div className="card-deck col-4 " key={song._id}>

        <div className="card card-inverse card-info mb-3 text-center">
          <div className="card-block">
          <p>
            <strong>User: </strong>{song.userName}
          </p>
          <p>
            <strong>Artist/Band: </strong>{song.songArtist}
          </p>
          <p>
            <strong>Title: </strong>{song.songTitle}
          </p>
          <p>
            <strong>Notes: </strong>{song.songNotes}
          </p>
        </div>
      </div>
    </div>

    )
  }
}

export default PlayListItem;
