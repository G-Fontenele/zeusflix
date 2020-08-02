import React from 'react';
// import { VideoCardContainer } from './styles';

import styled from 'styled-components';

const VideoPreviewContainer = styled.a`
  border: 2px solid;
  margin: 0 auto;
  margin-left: auto;
  margin-right: 0;
  border-radius: 20px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 1;
  height: 50vh;
  width: 50vw;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;


  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoPreview({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoPreviewContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || '#2A7AE4' }}
      title={videoTitle}
    />
  );
}

export default VideoPreview;
