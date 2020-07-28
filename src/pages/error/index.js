import React from 'react';
//import PageDefault from '../../components/PageDefault';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import background from '../../assets/img/background_error.jpg';

function Error() {
    return(
      <div>
        <Menu/>
          <img width = '100%' height = '100%' src = {background} alt = 'background'/>
        <Footer/>
      </div>
    )
  }

  export default Error;