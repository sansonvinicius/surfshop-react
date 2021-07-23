import React, { Component } from 'react';
import * as S from './style';
import { useHistory }  from 'react-router-dom';
import axios from 'axios';

export default class ContactFormComponent extends Component {

  DATA;

  constructor(props) {
      super(props);

      this.eventName = this.eventName.bind(this);
      this.eventEmail = this.eventEmail.bind(this);
  

      this.onFormSubmit = this.onFormSubmit.bind(this);

      this.state = {
          name: '',
          email: '',
      }
  }
 // Event handlers
 eventName(event) {
  this.setState({ name: event.target.value })
}

eventEmail(event) {
  this.setState({ email: event.target.value })
}

onFormSubmit(event) {
  event.preventDefault()
}

componentDidMount() {
  this.DATA = JSON.parse(localStorage.getItem('contact_form'));

  if (localStorage.getItem('contact_form')) {
      this.setState({
          name: this.DATA.name,
          email: this.DATA.email,

      })
  } else {
      this.setState({
          name: '',
          email: '',
      })
  }
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('contact_form', JSON.stringify(nextState));
}




render(){    
  return(
    <S.Container>
      <div>
        <img src="https://i.etsystatic.com/11119734/r/il/4454b0/1983342349/il_570xN.1983342349_ii56.jpg" alt="logo" width="200px" height="auto"/>
      </div>
      <S.Content>
          <div>
          <div >
              <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label><strong>Nome</strong></label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.eventName} />
                    </div>
                    <div>
                        <label><strong>Email</strong></label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.eventEmail} />
                    </div>
                    <div>
                        <S.Button type="submit" className="btn btn-primary btn-block">Cadastrar</S.Button>
                    </div>
                    <div>
                      <S.LinkHome to="/">Voltar para loja</S.LinkHome>
                    </div>
                </form>
              </div>
          </div>
      </div>
      </S.Content>
    </S.Container>
    ); 
       
  }  
} 


/* /
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
</S.Container> */