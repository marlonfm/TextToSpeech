import React, {useEffect,useState} from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiCornerUpLeft } from "react-icons/fi";

import { FcFullTrash } from "react-icons/fc";


export default function Dashboard() {

    const history = useHistory();

    const idUsuario = localStorage.getItem('idCadastro');
    const idNome = localStorage.getItem('nomeCadastro');

    const [dash, setDash] = useState([]);

    

    useEffect(()=>{
        api.get('profile', {
            headers: {
                Authorization: idUsuario,
            }
        }).then(res=>{

            let dados = res.data;

            let arr = 0;

            console.log(dados);

            if(dados == arr) {
                alert("Clique em NOVO PRODUTO para cadastrar!");
            }

            else {
                setDash(res.data);
            }

            
        })
    }, [idUsuario])

    function logout() {
        let confirmLogout = window.confirm('Você realmente deseja se deslogar da Sessão?');

        if(confirmLogout == true) {
            localStorage.clear()
        history.push('/login')
        } else{
            return false;
        }

        
    }
     
    async function deletePost(id) {

        let confirm = window.confirm('Você realmente deseja excluir este produto?');

            if(confirm == true){
                try {


                    await api.delete(`dashboard/${id}`, {
                    headers: {
                        Authorization: idUsuario,
                    }
                })
        
                setDash(dash.filter(dashe=>dashe.id !== id))
        
                }
        
                catch(err) {
                    alert('erro ao deletar')
                }
            }

            else {
                return false;
            }


        
    }
    

    return (
        <div className="contentDash">  
        <div className="dash">

        <div className="allContent">
            <div className="firstcontent">
               
            <h1 className="welcomeDash">Seja bem vindo {idNome} !</h1>
                   
                
            </div>
            

            <button className="btnnovo-post">
                <Link to="/novopost" className="linkdash">
                    Novo Produto
                </Link>
            </button>

           


            
            <button type="button" onClick={logout} className="btndash">
            <FiCornerUpLeft className="iconBack"/>
            </button>

            </div>

           
            <div className="dashAligns">
             {dash.map(dashs=>( 
             <div className="flex">
               <div className="post11">



                  
                  <img key={dashs.id} src={dashs.image_url} alt="" className="imgApi"/>

                  <div className="align2">
                      <h3 className="h3clothes">EM BREVE NAS LOJAS!</h3>
                      <h3 className="h3Api">{dashs.title}</h3>
                   <p className="valueApi">R$ {dashs.valor}</p>
                  </div>
                   
                 
                  <button type="button" onClick={()=>deletePost(dashs.id)} className="btndash2">
                      <FcFullTrash className="iconDelete"/>
                      
                    </button>
              
              </div>
              </div> 
             ))}
             </div>
             </div>
                
                
            



               
        </div>
    );
}