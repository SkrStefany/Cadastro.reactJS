

import {useState} from 'react';


function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);
  

  const [user, setUser] = useState({});
  
  function Registro(e) {
    e.preventDefault();
    setUser ({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return(
    <div 
    style={{ backgroundColor:'black', color:'white', fontSize:'15px',
             fontFamily:'Arial', display:'flex', flexDirection:'column',
             width:'90%', textAlign:'center', margin:'30px' }}
    >

      <form onSubmit={Registro}
        style={{color:'brown', padding:'90px'}}
      >
        <h1>Cadastro de Usuário</h1>

        <label>Nome:</label> <br/>
        <input placeholder='Digite seu nome:'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
          style={{margin:'10px', width:'60%', height:'15px', textAlign:'center'}}      
        >
        </input> <br/>

        <label>Email:</label> <br/>
        <input placeholder='Digite seu email:'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{margin:'10px', width:'60%',height:'15px', textAlign:'center'}} 
                >
        </input> <br/>

        <label>Idade:</label> <br/>
        <input placeholder='Digite sua idade:'
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                style={{margin:'10px', width:'60%',height:'15px', textAlign:'center'}} 
                >
        </input> <br/>

        <button
        type='submite'
        style={{height:'20px', width:'100px', backgroundColor:'blue', color:'white'}}
        >
          Registrar
        </button>
      </form>

      <br/><br/>

      <div
      style={{backgroundColor:'#696969', color:'black',
              padding:'20px'}}
      >
        <span style={{lineHeight:'50px'}}>Bem vindo: {user.nome}</span>  <br/>
        <span style={{lineHeight:'50px'}}>Idade: {user.idade}</span> <br/>
        <span style={{lineHeight:'50px'}}>Email: {user.email}</span> <br/>
      </div>
    
    </div>
  );
}

export default App;

