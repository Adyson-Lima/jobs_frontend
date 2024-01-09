import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function Jobs(){

  const[my_jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  //Read, lê dados da api
  useEffect(() => {
    api.get('api/v1/jobs',{})
    .then(response => {setJobs(response.data)})
  },[]);

  // UPDATE, atualiza dados na api
  async function updatejob(id){
    try {
      navigate(`/newupdate/${id}`);      
    } catch (error) {
      alert('Erro ao atualizar!');      
    }
  }

  // DELETE, exclui elemento na api
  async function deleteJob(id){
    try {
      await api.delete(`api/v1/jobs/${id}`,{});
      setJobs(my_jobs.filter(job => job.id !== id));    
    } catch (error) {
      alert('Erro ao excluir Job!');      
    }
  }

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Jobs Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Função</th>
              <th scope="col">Salário</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_jobs.map(job => (
              <tr key={job.id}>
                <th scope="row">{job.id}</th>
                  <td>{job.name}</td>
                  <td>{job.wage}</td>
                  <td>

                    <button data-testid="mybtn1" type="button"
                    className="btn btn-outline-info" style={{margin: '2px'}}
                    onClick={() => updatejob(job.id)}>Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger" style={{margin: '2px'}}
                    onClick={() => deleteJob(job.id)}>Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>
  );

}