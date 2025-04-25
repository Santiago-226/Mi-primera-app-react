import { useState } from "react";
import "./App.css";
import Saludo from "./components/Saludo"; // Importa el componente
import logoSena from "./assets/sena.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-20 text-white">

        <div className="flex flex-col items-center gap-7">
          <a  className="w-60"href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
            <img src={logoSena} alt="log-sena"/>
          </a>
          <h1 className="text-6xl font-bold">MI PRIMERA APP</h1>
        </div>


        <div className="flex flex-col items-center gap-5">
          <h2 className="text-4xl font-bold">CONTADOR</h2>
          <div className="flex gap-6 text-2xl font-bold items-center justify-center">
            <button className="border w-15 h-15 rounded-2xl bg-red-600 cursor-pointer" onClick={() => setCount((count) => count - 1)}>-</button>

            <h2 className="w-15">{count}</h2>

            <button className="border w-15 h-15 rounded-2xl bg-green-600 cursor-pointer" onClick={() => setCount((count) => count + 1)}>+</button>
          </div>
        </div>

        <div className="text-2xl space-y-2">
        <h2 className="text-4xl font-bold">LISTA DE NOMBRES</h2>
        <Saludo nombre="Santiago" />
        </div>
      </div>
    </>
  );
}

export default App;
