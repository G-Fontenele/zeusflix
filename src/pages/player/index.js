import React from 'react';
import Player from '../../components/Player/index'
import PageDefault from '../../components/PageDefault'; 

import { match } from 'react-router-dom'; 
// import { Container } from './styles';

const youtubeURL = 'https://www.youtube.com/watch?v=';

function convertIdToUrl(id) {
  return (`${youtubeURL}${id}`);
}

function PlayerPage({ match }) {

  
  const title = match.params.title;
  const video_id = match.params.video_id;

  const url = convertIdToUrl(video_id);
  
  return (
      <PageDefault to='/register/video' text='Novo Vídeo'>
          <Player 
          title={title}
          url={url} />
      </PageDefault>
  );
}

export default PlayerPage;