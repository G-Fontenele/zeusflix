import React from 'react';
import Player from '../../components/Player/index'
import PageDefault from '../../components/PageDefault'; 
// import { Container } from './styles';


function PlayerPage({title, url}) {
  return (
      <PageDefault>
          <Player 
          title={title}
          url={url} />
      </PageDefault>
  );
}

export default PlayerPage;