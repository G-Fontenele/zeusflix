import React from 'react';
import { Link } from 'react-router-dom';
// import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import zeusflixLogo from '../../assets/img/zeusflixLogoHeader.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import ButtonMenu from '../Button/ButtonMenu';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={zeusflixLogo} alt="zeusflix logo" />
      </Link>

      <ButtonMenu as={Link} className="ButtonLink" to="/user/login">
        Entrar
      </ButtonMenu>

      <ButtonMenu as={Link} className="ButtonLink" to="/register/video">
        Novo Vídeo
      </ButtonMenu>
    </nav>
  );
}

export default Menu;
