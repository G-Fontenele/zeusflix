import React from 'react';
import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'; //Another option of jsx styling


function Menu() {
    return (
        <nav className = 'Menu'>
            <a href = '/'>
                <img class='Logo' src={goncaflixLogo} alt='goncaflix logo'/>
            </a>  

            <Button as = 'a' className = 'ButtonLink' href = '/'>
                Novo Vídeo
            </Button>    
        </nav>
    );
}

export default Menu;