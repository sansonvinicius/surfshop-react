import styled from 'styled-components';
import{ Link } from 'react-router-dom';

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
    width: 250px;
    margin-top: 10px;
    border: 1px solid #000;
    background: #032f3c;
    color: #fff;


    &:focus,
    &:active,{
        outline: none;
        box-shadow: none;
    }

`;   
export const LinkHome = styled(Link)`
    margin-top: 5px;
    background: #032f3c;
    color: #fff;
    text-align: center;
    justify-content: center;
    display: block;
    height: 4px;
	line-height: 4px;
	white-space: nowrap;
    background-color: red;
    padding: 16px;
    text-decoration: none;
    font-size: 14px;
    border-radius: .25rem;
`;

;
