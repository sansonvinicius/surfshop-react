import React from 'react';
import * as S from './style';
import { useHistory }  from 'react-router-dom';

/* interface ICliente{
  nome: string;
  email: string;
 
}

const Cliente: React.FC = () => {
  const history = useHistory();
  const[ data, setData ] = useState<ICliente[]>([]);



  const handleCliente = (email: any) => {
   const clienteStore = JSON.stringify(data[email]);
   localStorage.setItem('@Cliente-${email}', clienteStore)
   
  }

  function changePage(){
    
    history.push('/clientes');
  }



  return (
   <Container>
   {/*   <div className="nav">
       <div>
        <img src="https://i.etsystatic.com/11119734/r/il/4454b0/1983342349/il_570xN.1983342349_ii56.jpg" alt="logo" width="200px" height="auto"/>
       </div>
     </div>
     <section>
       { data.map( (clientes, email) => (
          <div className="product-content" key={clientes.email}>
            <input className="nomeInput" placeholder="Nome" value={clientes.nome}></input>
            <button onClick={ () => handleCliente(email)}>Cadastrar</button>
          </div>
        ))}
     </section> }
     <div>
      <h1> Hi</h1> 
     </div>
   </Container>
  );
}*/

 export default function Clientes(){
    return(
      <S.Container>
        <div>
          <img src="https://i.etsystatic.com/11119734/r/il/4454b0/1983342349/il_570xN.1983342349_ii56.jpg" alt="logo" width="200px" height="auto"/>
        </div>
        <S.Content> 
          <p>Receba nossas promoções:</p>
            <S.Input  className="nomeInput" placeholder="Nome" />
            <S.Input  className="emailInput" placeholder="Email" />
            <S.Button type="button" >Cadastrar</S.Button>
        </S.Content>
      </S.Container>
    ); 
       
    

} 
