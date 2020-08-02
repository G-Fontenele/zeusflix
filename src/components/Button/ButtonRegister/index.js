import styled from 'styled-components';

const ButtonRegister = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    outline: none;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: 5,
    }
`;

export default ButtonRegister;