import React from 'react'; 
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Cadastro from './View/cadastro'
import Dashs from './View/dashboard';
import Logon from './View/logon';
import Novopost from './View/novopost';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>  

        <Route path="/"  exact component={Cadastro} />
          <Route path="/cadastro"  component={Cadastro} />
          <Route path="/dashboard"  component={Dashs} />
          <Route path="/login"  component={Logon} />
          <Route path="/novopost" component={Novopost} />
        </Switch>        
        </BrowserRouter>
    );
}