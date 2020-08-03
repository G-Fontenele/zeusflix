import React from 'react';
import ReactPlayer from 'react-player/lazy'
import './player.css';
// import { Container } from './styles';

const primary =  '#2A7AE4';

const opts = {
    playerVars: { 
        showinfo: 0, 
        autoplay: 0,
        color: 'blue',
        controls: 1,
        iv_load_policy: 1,
        modestbranding: 1,
        rel: 0
    }
};

function Player({ url, title }) {
  return (
      <>
      <h1>
        {title}
      </h1>
        <div className='player-wrapper'>
            <ReactPlayer   
                className='react-player'
                url={url}
                config={{
                    youtube: opts
                }}
                playing
            />
        </div>
        </>
  );
};

export default Player;