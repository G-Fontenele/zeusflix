import React from 'react';
import { Link } from 'react-router-dom';
// import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import zeusflixLogo from '../../assets/img/zeusflixLogoHeader.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button'; // Another option of jsx styling

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={zeusflixLogo} alt="zeusflix logo" />
      </Link>

      <Button style={{marginLeft: 730}} as={Link} className="ButtonLink" to="/user/login">
        Entrar
      </Button>

      <Button as={Link} className="ButtonLink" to="/register/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
