import styled from 'styled-components';

const ButtonMenu = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    outline: none;
    border-radius: 2px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: 2,
    }
`;

export default ButtonMenu;