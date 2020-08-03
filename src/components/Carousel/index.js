import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, ColorDiv, ContainerDiv } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import styled from 'styled-components';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.extra_link;
  const videos = category.videos;

  
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
        <ContainerDiv>
          <ColorDiv color={categoryColor}/>
            <Title style={{ color: categoryColor || 'red' }}>
              {categoryTitle}
            </Title>
            {categoryExtraLink && 
              <ExtraLink href={categoryExtraLink.url} target="_blank">
                {categoryExtraLink.text}  
              </ExtraLink>
              }
        </ContainerDiv>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
