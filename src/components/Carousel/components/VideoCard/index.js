import React from 'react';
import { VideoCardContainer } from './styles';
import { Link } from 'react-router-dom';

const playerURL = 'localhost:3000/player';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <Link to={`/player/${getYouTubeId(videoURL)}/${videoTitle}`}>
      <VideoCardContainer
        url={image}
        /* href={videoURL} */
        /* href={`/player/${getYouTubeId(videoURL)}/${videoTitle}`} */
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
    </Link>
  );
}

export default VideoCard;
