import React from 'react';
import { Link } from 'react-router-dom';
import goncaflixLogo from '../../assets/img/goncaflixLogo.png'
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'; //Another option of jsx styling


function Menu() {
    return (
        <nav className = 'Menu'>
            <Link to = '/'>
                <img class='Logo' src={goncaflixLogo} alt='goncaflix logo'/>
            </Link>  

            <Button as = {Link} className = 'ButtonLink' to = '/register/video'>
                Novo Vídeo
            </Button>    
        </nav>
    );
}

export default Menu;