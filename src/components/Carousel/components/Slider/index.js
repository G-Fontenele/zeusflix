/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 10px;
  }
  .slick-slide {
		opacity:0.4;
		transition:opacity 1s ease-out;
	}
  
  .slick-active {
      opacity:1!important;
      transition:opacity 0.2s ease-in;
    }
  
`;

export const SliderItem = styled.li`
  margin-right: 2px;
  img {
    margin: 16px;
    width: 298px;
    height: 170px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      swipeToSlide: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 