import { Back } from '../components/Back';
import { useState } from "react";

export function Salario() {
    const [salario, setSalario] = useState(null)
    const [novo_salario, setNovo_salario] = useState(null)


    function calcula() {
        if( salario > 0){            
            let total
        
            if (salario <= 1200) {
              total = salario * 1.16
            } else if (salario <= 2100) {
              total = salario * 1.13
            } else if (salario <= 3000) {
              total = salario * 1.10
            } else if (salario > 3000) {
              total = salario * 1.05
            }
        
            setNovo_salario(total.toFixed(2))
          }
          else{setNovo_salario(0)}
        }
    

    return (
        <>
         <div className="flex flex-col md:flex-row justify-between items-center w-full px-20 mt-10 flex-wrap gap-5">
        <Back />
          <h1 className="text-3xl text-center flex-1 my-5 mb-5  md2:mr-0 lg:mr-20">Aumento salario</h1>
        </div>
            <div className="flex justify-center items-center h-auto">
                <div className="container w-full h-50 flex justify-center items-center flex-col gap-10">
                    <div className="flex gap-5 flex-wrap justify-center items-center">
                        <input
                            className='h-10 w-65 border rounded text-center'
                            type="number"
                            value={salario > 0 ? salario : ''}
                            min={0.1}
                            placeholder="Salário bruto"
                            onChange={(e) => setSalario(Number(e.target.value))}
                            required={salario <= 0}  
                        />
                        <input
                            type="button"
                            value="Calcular"
                            onClick={calcula}
                            className="h-10 w-65 border rounded text-center text-blue-500 hover:text-white hover:cursor-pointer transition-all"
                        />
                    </div>
                    {novo_salario !== null && (
                        <p className="mt-5 text-lg">
                            {novo_salario > 0 ? `R$ ${novo_salario}` : "Por favor, preencha todos os campos corretamente."}
                        </p>
                    )}                    
                </div>
            </div>
        </>
    );
}
