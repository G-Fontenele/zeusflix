import React from 'react';
import { Link } from 'react-router-dom';
// import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import zeusflixLogo from '../../assets/img/zeusflixLogoHeader.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import ButtonMenu from '../Button/ButtonMenu';

function Menu({to, text}) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={zeusflixLogo} alt="zeusflix logo" />
      </Link>

      <ButtonMenu as={Link} className="ButtonLink" to={to}>
        {text}
      </ButtonMenu>
    </nav>
  );
}

export default Menu;
