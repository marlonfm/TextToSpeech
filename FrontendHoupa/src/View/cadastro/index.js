import React, { useState } from 'react'; 
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import ImgHoupando from '../../assets/houpando.png';

const Login = () => { 


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');

    const history = useHistory();

   

    async function insertClick (e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            rg,
            cpf,
        };


        try {
            const res = await api.post('cadastro', data);

            alert(`Seu ID para acessar é: ${res.data.id}, anote sua identificação para conseguir acessar em breve!`); 

            

            history.push('/login')
        }

        catch(err) {
            

            alert('erro ao cadastrar');
        }
    }

    

    return (
        <header>
            <h3 className="welc1">Bem vindo a Houpando!</h3>
        <div className="content">

            
            <div className="cadastro">

                <div className="alignleft">
                    <div className="contain">  
                        <img src={ImgHoupando} alt="" className="imghoupa"/>

                        <h3 className="slogan">O Vestuário do momento, o vestuário inovador.</h3>
                    </div>
                </div>

                <div className="aligns">

                <form className="form1" onSubmit={insertClick}>
                    <div className="centers">

                    <input type="text"
                    placeholder="Nome"
                    className="inpCadastro"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    
                    /><br/>

                     

                    <input 
                    value={email}
                    placeholder="E-mail"
                    className="inpCadastro"
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    
                       />
                       
                       <br/>

                    

                    <input type="text"
                    placeholder="RG"
                    value={rg}
                    className="inpCadastro"
                    onChange={e=>setRg(e.target.value)}
                    /><br/>

                    

                    <input 
                    value={cpf}
                    placeholder="CPF"
                    className="inpCadastro"
                    onChange={e=>setCpf(e.target.value)}
                    type="text"/><br/>

                    <button className="btnCad" type="submit"><b>Cadastrar</b></button><br/><br/><br/>


                </div>
                </form>
                </div>
                
            </div>
        </div>
        <div class="linker">
            <Link to="/login" className="link1">
                   Já é usuário nosso? clique aqui.
        </Link>
        </div>
        
        </header>
        
    );
}

export default Login;