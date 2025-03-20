import { useState } from "react";
import { Back } from '../components/Back';


export function HorasExtras() {
    const [salario, setSalario] = useState(0.0)
    const [horas_dias, setHoras_dias] = useState(0)
    const [horas_fds, setHoras_fds] = useState(0)
    const [horas_extras, setHoras_extras] = useState(null)

    function calcula() {
        if (salario > 0 && horas_dias >= 0 && horas_fds >= 0) {
            let valorHora = salario / 220
            let horasExtrasDia = valorHora * 1.5 * horas_dias
            let horasExtrasFds = valorHora * 2 * horas_fds
            let total = horasExtrasDia + horasExtrasFds
            setHoras_extras(total)
        } else {
            setHoras_extras(0)
        }
    }

    return (
        <>
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-20 mt-10 flex-wrap gap-5">
        <Back />
          <h1 className="text-3xl text-center flex-1 my-5 mb-10  md2:mr-0 lg:mr-20">Calcular horas extras</h1>
        </div>
            <div className="flex justify-center items-center h-auto">
                <div className="container w-full h-50 flex justify-center items-center flex-col gap-10">
                    <div className="flex gap-5 flex-wrap justify-center mt-10 items-center">
                        <input
                            className='h-10 w-65 border rounded text-center'
                            type="number"
                            value={salario > 0 ? salario : ''}
                            min={0.1}
                            placeholder="Salário bruto"
                            onChange={(e) => setSalario(Number(e.target.value))}
                            required
                        />
                        <input
                            type="number" className='h-10 w-65 border rounded text-center'
                            min={0.1}
                            value={horas_dias > 0 ? horas_dias : ''}
                            placeholder="Horas extras (Dias úteis)"
                            onChange={(e) => setHoras_dias(Number(e.target.value))}
                        />
                        <input
                            type="number" className='h-10 w-65 border rounded text-center'
                            min={0.1}
                            value={horas_fds > 0 ? horas_fds : ''}
                            placeholder="Horas extras (Finais de semana)"
                            onChange={(e) => setHoras_fds(Number(e.target.value))}
                        />
                        <input
                            type="button"
                            value="Calcular"
                            onClick={calcula}
                            className="h-10 w-65 border rounded text-center text-blue-500 hover:text-white hover:cursor-pointer transition-all"
                        />
                    </div>
                    {horas_extras !== null && (
                        <p className="text-lg">
                            {horas_extras > 0 ? `Total de horas extras: R$ ${horas_extras.toFixed(2)}` : "Por favor, preencha todos os campos corretamente."}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
