import React, {Component} from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addToList = this.addToList.bind(this);

    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    };
  }
  handleInputChange(event) {
    console.log(this.state);
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  addToList = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }
  render() {
    return (
      <div className="card-block col-4">
        <div className="card ">
          <h3 className='card-header'>Add your Song:</h3>
          <div class="form-line">
            <form onSubmit={this.addToList}>
              <div className="form-group">
                <label>
                  Your Name:
                  <input type="text" className="form-control" value={this.state.userName} onChange={this.handleInputChange} name="userName"/>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Artist/Band:
                  <input onChange={this.handleInputChange} className="form-control" name="songArtist" type="text" value={this.state.songArtist}/>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Song Title:
                  <input onChange={this.handleInputChange} className="form-control" name="songTitle" type="text" value={this.state.songTitle}/>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Note about Song:
                  <input onChange={this.handleInputChange} className="form-control" name="songNotes" type="text" value={this.state.songNotes}/>
                </label>
              </div>
              <div className="form-group">
                <input className="btn btn-default submit" type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default PlayListForm;
