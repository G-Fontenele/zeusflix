import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

// import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import zeusflixLogo from '../../assets/img/zeusflixLogo.png';
import githubLogo from '../../assets/img/githubLogo.png';
import linkedinLogo from '../../assets/img/linkedinLogo.png';
import ButtonMenu from '../Button/ButtonMenu';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={zeusflixLogo} alt="zeusflix logo" />
      </a>
      
      <div style={{padding:5}} >
        <ButtonMenu as={Link} className="ButtonLink" to="/user/login">
          Entrar
        </ButtonMenu>
      </div>

      <p>
        Projeto Criado durante a
        {' '}
        <a href="https://github.com/G-Fontenele/zeusflix">
          Imersão React da Alura
        </a>
      </p>
      <a
        style={{ padding: 10 }}
        href="https://github.com/G-Fontenele"
      >
        <img style={{ flex: 0.5, width: 50, padding: 10 }} className="Logo" src={githubLogo} alt="github" />
      </a>
      <a
        style={{ padding: 10 }}
        href="https://www.linkedin.com/in/gon%C3%A7alofontenele/"
      >
        <img style={{ flex: 0.5, width: 50, padding: 10 }} className="Logo" src={linkedinLogo} alt="linkedin" />
      </a>
    </FooterBase>
  );
}

export default Footer;
