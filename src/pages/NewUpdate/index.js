import {Link, useNavigate, useParams} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import api from '../../services/api';

export default function NewUpdate(){

  const[name, setName] = useState('');
  const[wage, setWage] = useState('');
  const navigate = useNavigate();

  // identificador job_id, é o mesmo definido na rota
  const{job_id} = useParams();

  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, wage};

    if (job_id === '0') {
      try {
        await api.post('api/v1/jobs', data,{});
        navigate('/');        
      } catch (error) {
        alert('Erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/jobs/${job_id}`, data,{});
        navigate('/');        
      } catch (error) {
        alert('Erro ao atualizar');        
      }      
    }
  }

  // carrega registro especifico da api e seta dados para atualização
  async function loadJob(){
    try {
      const response = await api.get(`api/v1/jobs/${job_id}`,{});
      setName(response.data.name);
      setWage(response.data.wage);      
    } catch (error) {
      alert('Erro ao buscar dados na api');
      navigate('/');      
    }
  }

  // chama loadJob para preencher dados no form
  useEffect(() => {
    if (job_id === '0') {
      return;      
    } else {
      loadJob();      
    }
  }, [job_id]);


  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Jobs Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Função</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Função" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="wage">Salário</label>
            <input data-testid="input2" id="wage" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Salário" value={wage}
            onChange={e => setWage(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" 
          className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>
  );

}