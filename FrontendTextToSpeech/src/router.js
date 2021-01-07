import React from 'react'; 
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Cadastro from './View/cadastro'


export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>   
          <Route path="/" exact component={Cadastro} />
          <Route path="/home" component={Cadastro} />
        </Switch>        
        </BrowserRouter>
    );
}