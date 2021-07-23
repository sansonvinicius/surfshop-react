import React, { useState, useEffect } from 'react';
import Cart from '../../assets/cart.jpeg'
import { Container } from './style';
import api from '../../services/api';
import { useHistory }  from 'react-router-dom';
import Clientes from '../Clientes/clientes';



interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


const Home: React.FC = () => {
  const history = useHistory();
  const[ data, setData ] = useState<IProduct[]>([]);
  const[ cart, setCart ] = useState<IProduct[]>([]);

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  
  
  },[])

  const handleCart = (index: number) => {
   let push: any = [...cart, cart.push(data[index])]
   setCart(push)
   const productStore = JSON.stringify(cart);
   localStorage.setItem('@cart',productStore)
   
  }

  function changePage(){
    
    history.push('/clientes');
  }



  return (
   <Container>
     <div className="nav">
       <div>
        <img src="https://i.etsystatic.com/11119734/r/il/4454b0/1983342349/il_570xN.1983342349_ii56.jpg" alt="logo" width="200px" height="auto"/>
       </div>
       <div className="cart">
         <img src={Cart} alt= "shopcart" width = "50px" height="auto" />
         <span>({cart.length}) - Itens</span>
       </div>
       <div><button type="button" onClick={changePage}>Quero me cadastrar</button></div>
     </div>
     <section>
       { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
          <img src= {prod.photo} alt ="Longboard" width="200" height="auto"/>
          <h4>{prod.name}</h4>
          <span>{prod.description}</span>
          <h6>{prod.price}</h6>
          <button onClick={ () => handleCart(index)}>Adicionar ao carrinho</button>
        </div>
        ))}
     </section>
   </Container>
  );
}

export default Home;