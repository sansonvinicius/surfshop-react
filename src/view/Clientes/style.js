import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

`
export const Content = styled.div`
    
    display: grid;
    align-items: center;
    justify-content: center;
  


`
export const Input = styled.input`
    margin-top: 5px;
    height: 1.5rem;
    padding: 0 .5rem;
    display: flex;
    border: 1px solid #ddd;
    margin-bottom: 5px;

    &:focus,
    &:active,{
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #032f3c;
    color: #fff;


    &:focus,
    &:active,{
        outline: none;
        box-shadow: none;
    }

`;


;
