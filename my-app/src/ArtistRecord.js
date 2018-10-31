import React, { Component } from 'react';
import Record from './Record.js'
import './ArtistRecord.css';


function ArtistMusic(props){
  return (
  <li>{props.title} <br />
      {props.artist} <br />
      <iframe src={props.url} />
  </li>
  )
}

class ArtistRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    };

    this.getArtistMusic = this.getArtistMusic.bind(this);
  }

  getArtistMusic(event){
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com'
    const options = {
      method: 'get',
      credentials: 'include'
    };
    fetch (`${BASE_URL}/artists/${this.props.id}/tracks`, options)
    .then(res => res.json())
    .then(data => { this.setState({ tracks: data })
    });
  }


  render() {
    return (
      <Record>
      <h2>{this.props.name}</h2>
      <h3>{this.props.genre}</h3>
      <button onClick={this.getArtistMusic}>Mostrar musicas</button>
      <ul>
        {this.state.tracks.map((track, index) => <ArtistRecord key={index} {...track}/>)}
      </ul>
    </Record>
    )

  }
}
export default ArtistRecord;
