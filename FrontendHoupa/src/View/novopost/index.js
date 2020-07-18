import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import Dropzones from '../../Components/Upload/index';

export default function Post() {

    const history = useHistory();

    const [novopost, setNovopost] = useState('');

    const [selectedFile, setSelectedFile] = useState('');

    const [valor, setValor] = useState('');
    

    const idCadastro = localStorage.getItem('idCadastro');

    async function inserePost(e) {
        e.preventDefault()

        const data = new FormData();

        data.append('title', novopost);
        data.append('valor', valor);

        if(selectedFile) {
            data.append('file', selectedFile);
        }

        try {
            await api.post('dashboard', data, {
                headers: {
                    Authorization: idCadastro,
                }
            })
            alert("Produto cadastrado com sucesso!");

            history.push('/dashboard');

        }
        
        catch(err) {
            alert('erro ao inserir novo post!');
        }
    }


    return (
        <div className="contentNew">
            <div className="logarNew">
                <h2>Cadastre seu produto!</h2><br/><br/><br/><br/>

                <form onSubmit={inserePost}>

                <div className="alignFlex">
                    <label htmlFor="email">
                        Produto
                    </label>
                    <input className="inputpost"
                    value={novopost}
                    onChange={e=>setNovopost(e.target.value)}
                    />

                    <label htmlFor="email">
                        Valor
                    </label>
                    <input className="inputpost"
                    value={valor}
                    onChange={e=>setValor(e.target.value)}/>

                    <Dropzones onFileUploaded={setSelectedFile} className="fileStyles"/><br/>

                    <button type="submit" className="btnpublicar">Publicar</button><br/>
                    </div>

                    
                </form>
            </div>
        </div>
    );
}