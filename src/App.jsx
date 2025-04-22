import { useState } from 'react'
import './App.css'
import Saludo from './components/Saludo'; // Importa el componente

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>CONTADOR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>

        <h2>{count}</h2>

        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>

      </div>

      <h1>LISTA DE NOMBRES</h1>

        <Saludo nombre="Santiago"/>
    

    </>
  )
}

export default App
