import React, { Component } from 'react';
import './App.css';
import Record from './Record.js';
import ArtistRecord from './ArtistRecord.js';
import { Route, Link} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };

  }

  componentDidMount(){
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';
    const options = {
    method: 'post',
    headers:{'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({email: 'rafael@laboratoria.la', password: 'banana'})
    };

    fetch(`${BASE_URL}/login`, options)
      .then(res => {
        const options = {
          method: 'get',
          credentials: 'include',
        };
        fetch(`${BASE_URL}/artists`, options)
          .then(res => res.json())
          .then(data => this.setState({ artists: data }));
      })
  }

  render() {
    return (
      <div>
        <nav className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/playlist'>Playlist</Link>
          <Link to='/yourList'>Crie sua Playlist</Link>
          <Link to='/contato'>Entre em Contato</Link>
        </nav>

      <Route path='/' exact component={Home} />>
      <Route path='/yourList'  component={Musicas} />
      <Route path='/contato' render={() =>
      <div className="contact">
        <h2>Entre em contato com nosso atendimento para dúvidas.<br/>
            Nosso email: musicaslegais@tocamusica.com <br/>
            Whatsapp: (11)9999-0000
        </h2>
      </div>
      } />
      <Route path='/playlist' render={() =>
        <div>
            {this.state.artists.map(artist => <ArtistRecord {...artist} key={artist.id} />)}
        </div>
      } />
      <Route path='/yourList' render={() => 'Isso mesmo'} />






      </div>
    );
  }
}

const Playlist = (props) => {
  return (
    <div>
    {props.artists.map((artist) =>
      <ArtistRecord name={artist.name} genre={artist.genre} id={artist.id}/>
    )}
    <Record>
      <button className='my-button' onClick={this.handleClick}>Mostrar Artistas</button>
    </Record>
  </div>
  )
};

const Musicas = () => {
  return (
    <div>
      <h1></h1>
      <Link to='/about'>clique aqui</Link>
    </div>
  )
}

const Home = () => {
  return (
    <div className='home'>
      <h1 className='introduction'>BemVindo!!</h1>
      <h2 className='introduction'>
        Conheça nossas músicas!<br/>
        Faça sua própria playList.
      </h2>
    </div>
  )
}

export default App;
