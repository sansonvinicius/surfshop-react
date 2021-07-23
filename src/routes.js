import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Clientes from './view/Clientes/clientes';
import Home from '../src/view/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= {Home}/>
                <Route path='/clientes' component= {Clientes}/>
            </Switch>
        </BrowserRouter>
    )
}