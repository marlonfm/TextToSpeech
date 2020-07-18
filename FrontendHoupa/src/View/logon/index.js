import React, { useState } from 'react'; 
import './style.css';
import { Link,useHistory } from 'react-router-dom';    
import api from '../../services/api';

export default function Logar() {

    const history = useHistory();

    const [id, setId] = useState('');


    async function loginClick(e) { 
        e.preventDefault();

        
        try {
            const response = await api.post('login', ({ id }));
            alert(`Bem vindo de volta ${response.data.nome}`)

            localStorage.setItem('idCadastro',id);
            localStorage.setItem('nomeCadastro', response.data.nome);

            history.push('/dashboard')
        }
        catch(err) {
            alert('ID não existe');
        }
    }

    return (
        <div className="content">
            <div className="logar">
                
                    <h1 className="text1">
                        Olá Houpando ! Faça login para começar.
                    </h1><br/><br/><br/><br/><br/><br/><br/><br/>
                

                <form onSubmit={loginClick}>
                <div class="align-content">
                    

                <input className="inpId" type="text"
                value={id}
                placeholder="Digite seu ID de cadastro"
                onChange={e=>setId(e.target.value)}
                />
                </div><br/><br/>

                <button className="btn-entra" type="submit">Entrar</button>
                
                </form>

                <div className="linkers">
                <Link to="/cadastro" className="linkUser">Ainda não é usuário? clique aqui.</Link>
                </div>
            </div>
        </div>
    );
}