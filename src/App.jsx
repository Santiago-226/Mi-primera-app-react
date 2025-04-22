import { useState } from 'react'
import './App.css'
import Saludo from './components/Saludo'; // Importa el componente
import logoSena from './assets/sena.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <h1>MI PRIMERA APP</h1>

      <div>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
        <img src={logoSena} alt="log-sena" className='logo'/>
        </a>
      </div>

      <h2>CONTADOR</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>

        <h2>{count}</h2>

        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>

      </div>

      <h2>LISTA DE NOMBRES</h2>

        <Saludo nombre="Santiago"/>
    

    </>
  )
}

export default App
