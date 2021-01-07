import React,{ useState,useEffect } from 'react'; 
import './styles.css';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const Cadastro = () => {

    const History = useHistory();

    const [comentario, setComentario] = useState(''); 

    const [mostraComentario, setmostraComentario] = useState([]); 

    async function enviaData (e) {
        e.preventDefault();
        
        try{
            const consomeApi = await api.post('cadastro', {comentario});
            alert('ok '+consomeApi.data.id);
            localStorage.setItem('id', consomeApi.data.id);

            History.push('/home');
        }   

        catch(err){
            console.error(err);
            alert('error');
        }
    }

    const ids = localStorage.getItem('id');
    
    useEffect(()=>{


        api.get('cadastro', {
            headers: {
                Authorization: ids
            }
        }).then(res=>{
            console.log(res.data);
            setmostraComentario(res.data);
            
        })

    }, [ids]);

    function chamaAudio(audi) {

        var audio = new Audio(audi);

        audio.play();
   
    }

    return(
        <div className="cadastro">

            <div className="container">
                <div className="painel-left">
                    <div className="form">

                        <form className="form" onSubmit={enviaData}>
                            <label className="label-form">Digite o que quer ouvir !</label>

                            

                            <input 
                            type="text" 
                            className="inp"
                            value={comentario}
                            onChange={e=>setComentario(e.target.value)}
                            />

                            <button type="submit"><p>Cadastrar</p></button>
                        </form>

                    </div>
                </div>
                <div className="linha-vertical"></div>
                <div className="painel-right">
                     <div className="edita">

                        <label className="label-form">Comentarios</label>
                            
                        {mostraComentario.map(item=>(
                            <div className="section" key={item.id}>
                                <span>{item.comentario}</span>
                                <button 
                                type="button" 
                                onClick={() => chamaAudio(item.audio_url)}>
                                    <p>Ouvir</p>
                                </button>
                                
                            </div>
                        ))}
                        

                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default Cadastro;