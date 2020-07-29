import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 8px;
  background: red;
  line-height: 1;
  border-radius: 2px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 15px;
  font-weight: bold;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 10px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 10px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 170px;
  margin-left: 4%;
  margin-bottom: 20px;
`;
