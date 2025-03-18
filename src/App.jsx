import { useState } from 'react';
import './App.css';

function App() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [msg, setMsg] = useState([])

  function handleSum(operador) {

    let result
    let rn1
    let rn2
    switch (operador) {
      case '+':
        result = n1 + n2
        break
      case '-':
        result = n1 - n2
        break
      case '/':
        result = n2 !== 0 ? n1 / n2 : 'Erro (Divisão por zero)'
        break
      case '*':
        result = n2 !== 0 ? n1 * n2 : 'Erro (Divisão por zero)'
        break
      case '**':
        result = n1 ** n2
        break
      case 'raiz':

        rn1 = Math.sqrt(n1)
        rn2 = Math.sqrt(n2)
        result = `'Numero 1: ${rn1.toFixed(2)}, 
                   Numero 2: ${rn2.toFixed(2)} '`
        break
      default:
        result = 'Operação inválida'
    }
    

    setMsg([...msg, { res: `Resultado: ${result} `}])

  }

  const OnClear = () => setMsg([])

  return (
    <>
    <h1 className='text-3xl text-center mt-5 mb-5'>JP Caucula!</h1>
      <div className="flex justify-center items-center  h-auto">
      <div className="container  w-full h-150 flex  justify-center items-center flex-col gap-10 ">
        <div className="flex gap-5 flex-wrap justify-center items-center">
        <input  className='h-10 w-60 border rounded text-center '
          type="number" 
          placeholder="Número 1" 
          onChange={(e) => setN1(Number(e.target.value))} 
        />
        <input 
          type="number" className='h-10 w-60 border rounded text-center '
          placeholder="Número 2" 
          onChange={(e) => setN2(Number(e.target.value))} 
        />
      </div>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <button onClick={ () => handleSum('+') }  className='h-10 min-w-20 border rounded border-blue-400 text-blue-400  hover:text-white hover:border-white hover:cursor-pointer' >Somar</button>
        <button onClick={ () => handleSum('-') } className='h-10 min-w-20 border rounded border-blue-400 text-blue-400  hover:text-white hover:border-white hover:cursor-pointer' >Subitrair</button>
        <button onClick={ () => handleSum('*') } className='h-10 min-w-20 p-2 border rounded border-blue-400 text-blue-400  hover:text-white hover:border-white hover:cursor-pointer' >Multiplicar</button>
        <button onClick={ () => handleSum('/') } className='h-10 min-w-20 border rounded border-blue-400 text-blue-400  hover:text-white hover:border-white hover:cursor-pointer' >Dividir</button>
        <button onClick={ () => handleSum('**') } className='h-10 min-w-20 border rounded border-blue-400 text-blue-400  hover:text-white hover:border-white hover:cursor-pointer' >Potenciar</button>
        <button onClick={ () => handleSum('raiz')  } className='h-10 min-w-20 p-2 border rounded border-blue-400 text-blue-400 hover:text-white hover:border-white hover:cursor-pointer' >Raiz Quadrada</button>
        <button onClick={OnClear} className='h-10 min-w-20 border rounded border-red-400 text-red-400  hover:text-white hover:border-white hover:cursor-pointer' >Limpar</button>
      </div>
      <div className="overflow-y-auto h-100 w-full text-center flex flex-col gap-5">
        {msg.map((item, index) => (
          <p key={index}>{item.res}</p>
        ))}
      </div>
       </div>
</div>
    </>
  );
}

export default App;
