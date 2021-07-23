import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cart{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    section { 
        height: 100vh;
        width: 100%;
        // background: #e2e2;
        display: flex;
        justify-content: space-around;

        .product-content{
            display: grid;
            text-align: center;
            height: 400px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
    }
    
    button{ 
        background: #032f3c;
        color: #fff;
    }
    #btCadastro{
        height: 3.5rem;
        width: 100%;
        background: #E9BC33;
        color: #fff;
        border: none;

    }
`
