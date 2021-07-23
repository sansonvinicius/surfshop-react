import React, { useState} from 'react';
import * as S from './style';
import { useHistory }  from 'react-router-dom';
import axios from 'axios';


interface ICliente{
  nome: string;
  email: string;
}

 export default function Clientes( ){
  const history = useHistory();
  const [clientes, setClientes] = useState<ICliente[]>([]);



/*    function handleClientes(email: any){
      let cliente = clientes[email];
      let push: any = [...clientes, clientes.push(cliente)]
      setClientes(push)
      const clientesStore = JSON.stringify(clientes);
      localStorage.setItem('@clientes', clientesStore) 
  }
 */


    return(
      <S.Container>
        <div>
          <img src="https://i.etsystatic.com/11119734/r/il/4454b0/1983342349/il_570xN.1983342349_ii56.jpg" alt="logo" width="200px" height="auto"/>
         </div>
        <S.Content> 
              <p>Receba nossas promoções:</p>
              <S.Input  className="nomeInput" placeholder="Nome" />
              <S.Input  className="emailInput" placeholder="Email" />
               <S.Button>Cadastrar</S.Button>
               <S.LinkHome to="/">Voltar para loja</S.LinkHome>
        </S.Content>
      </S.Container>
    ); 
       
    

} 
