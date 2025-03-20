import { Back } from '../components/Back';
import { useState } from "react";

export function Transporte(){
    const [pessoas, setPessoas] = useState(null) 
    const [dias, setDias] = useState(null)
    const [frete, setFrete] = useState(null)


    function calcula() {
        if( pessoas > 0){            
            let total
        
            if (pessoas <= 49) {
                total = (pessoas * 4.50) * dias
            } else if (pessoas <= 99) {
                total = (pessoas * 4.10) * dias
            } else if (pessoas <= 149) {
                total = (pessoas * 3.80) * dias
            } else if (salario > 150) {
                total = (pessoas * 3.60) * dias
            }
        
            setFrete(total.toFixed(2))
          }
          else{setFrete(0)}
        }
    
    return (
        <>
         <div className="flex flex-col md:flex-row justify-between items-center w-full px-20 mt-10 flex-wrap gap-5">
        <Back />
          <h1 className="text-3xl text-center flex-1 my-5 mb-5  md2:mr-0 lg:mr-20">Transporte</h1>
        </div>
            <div className="flex justify-center items-center h-auto">
                <div className="container w-full h-50 flex justify-center items-center flex-col gap-10">
                    <div className="flex gap-5 flex-wrap justify-center mt-10 items-center">
                    <input
                            className='h-10 w-65 border rounded text-center'
                            type="number"
                            value={pessoas > 0 ? pessoas : ''}
                            
                            placeholder="Numero de pessoas"
                            onChange={(e) => setPessoas(Number(e.target.value))}
                            required={pessoas <= 0}  
                        />
                            <input
                            className='h-10 w-65 border rounded text-center'
                            type="number"
                            value={dias > 0 ? dias : ''}
                            
                            placeholder="Dias"
                            onChange={(e) => setDias(Number(e.target.value))}
                            required={dias <= 0}  
                        />
                        <input
                            type="button"
                            value="Calcular"
                            onClick={calcula}
                            className="h-10 w-65 border rounded text-center text-blue-500 hover:text-white hover:cursor-pointer transition-all"
                        />
                        </div>
                        {frete !== null && (
                        <p className=" text-lg">
                            {frete > 0 ? `R$ ${frete}` : "Por favor, preencha todos os campos corretamente."}
                        </p>
                    )}         
                    </div>
                    
                </div>
        </>
    );
}

    
