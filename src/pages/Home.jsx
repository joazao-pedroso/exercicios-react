import Clock from "../components/Clock";


function Home(){
    return(
        
    <div className="flex w-full h-full gap-3 items-center justify-center p-3 flex-col">
        <h1 className="text-2xl py-3">Exercicios React</h1>
      <div className="border w-[70%] h-125 p-5 rounded-2xl flex flex-col items-center justify-center gap-3">
        <a href="/calculadora" className="border shadow-md hover:shadow-md shadow-green-400/20 border-green-400 hover:shadow-white-400/30 text-green-400 rounded-2xl w-[50%] text-center flex items-center justify-center text-1xl h-[10%] hover:text-white hover:border-white transition-all ">Calculadora</a>
        <a href="/horas_extras" className="border shadow-md hover:shadow-md shadow-green-400/20 border-green-400 hover:shadow-white-400/30 text-green-400 rounded-2xl w-[50%] text-center flex items-center justify-center text-1xl h-[10%] hover:text-white hover:border-white transition-all ">Horas Extras</a>
        <a href="/salario" className="border shadow-md hover:shadow-md shadow-green-400/20 border-green-400 hover:shadow-white-400/30 text-green-400 rounded-2xl w-[50%] text-center flex items-center justify-center text-1xl h-[10%] hover:text-white hover:border-white transition-all ">Sálario</a>
        <a href="/transporte" className="border shadow-md hover:shadow-md shadow-green-400/20 border-green-400 hover:shadow-white-400/30 text-green-400 rounded-2xl w-[50%] text-center flex items-center justify-center text-1xl h-[10%] hover:text-white hover:border-white transition-all ">Transporte</a>
        <Clock />
      </div>
      <p>Feito por João Pedro Pedroso</p>
    </div>
    )
}

export default Home;