import React from 'react';
import { FooterBase } from './styles';
import goncaflixLogo from '../../assets/img/goncaflixLogo.png'


function Footer() {
  return (
    <FooterBase>
      <a href='/'>
        <img class='Logo' src={goncaflixLogo} alt='goncaflix logo'/>
      </a>
      <p>
        Projeto Criado durante a
        {' '}
        <a href= 'https://www.https://github.com/imersao-alura/aluraflix.com.br/'>
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
