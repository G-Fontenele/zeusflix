import React from 'react';
//import PageDefault from '../../components/PageDefault';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import background from '../../assets/img/background_error.jpg';

//<img width = '100%' height = '100%' src = {background} alt = 'background'/>

function Error() {
    return(
      <div>
        <Menu/>
          <div>
            <img width = '100%' height = '100%' src = {background} alt = 'background'/>
          </div>
        <Footer/>
      </div>
    )
  }

  export default Error;