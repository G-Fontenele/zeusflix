import React from 'react';
import { FooterBase } from './styles';
//import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import zeusflixLogo from '../../assets/img/zeusflixLogo.png'
import githubLogo from '../../assets/img/githubLogo.png'
import linkedinLogo from '../../assets/img/linkedinLogo.png'


function Footer() {
  return (
    <FooterBase>
      <a href='/'>
        <img class='Logo' src={zeusflixLogo} alt='zeusflix logo'/>
      </a>
      <p>
        Projeto Criado durante a
        {' '}
        <a href= 'https://www.https://github.com/imersao-alura/aluraflix.com.br/'>
          Imersão React da Alura
        </a>
      </p>
      <a 
        style={{padding:10}}
        href='https://github.com/G-Fontenele'>
        <img style = {{flex: 0.5, width: 80, padding:10}} class='Logo' src={githubLogo} alt='github'/>
      </a>
      <a  
        style={{padding:10}}
        href='https://www.linkedin.com/in/gon%C3%A7alofontenele/'>
        <img style = {{flex: 0.5, width: 80, padding:10}} class='Logo' src={linkedinLogo} alt='linkedin'/>
      </a>
    </FooterBase>
  );
}

export default Footer;
