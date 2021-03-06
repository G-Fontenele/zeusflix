import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

// import { Container } from './styles';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
    padding: ${paddingAll};
    `}
  `;

function PageDefault({ children, paddingAll, to, text }) {
  return (
    <>
      <Menu to={to} text={text}/>
      <Main paddingAll={paddingAll}>
        { children }
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
