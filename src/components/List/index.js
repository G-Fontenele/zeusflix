import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export const List = styled.ul`
  list-style-type: none;
  font-size: 1.4rem;
  span {
    font-weight: bold;
    margin-right: 1rem;
  }
  @media (max-width: 800px) {
    margin-left: 0;
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 0.2rem;
  margin-bottom: 0.1rem;
`

export const ListLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
`

export const ListCommand = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-left: 3.5rem;
  min-height: 2.5rem;
  margin: 0.5rem 0;
`

export const Color = styled.div`
  display: table;
  height: 2rem;
  width: 0.5rem;
  border-radius: 2px;
  background-color: ${({ color }) => {
    return color;
}};
  margin: 0 1rem 0 0;
`

export const ButtonRemove = styled.div`
  color: var(--primary);
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
