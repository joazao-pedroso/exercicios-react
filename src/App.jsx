import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Calculadora  from "./pages/Calculadora";
import  Home  from "./pages/Home";
import { HorasExtras } from "./pages/HorasExtras";
import { Salario } from "./pages/Salario";
import { Transporte } from "./pages/Transporte";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/horas_extras" element={<HorasExtras />} />
        <Route path="/salario" element={<Salario />} />
        <Route path="/transporte" element={<Transporte/>} />
      </Routes>
    </Router>
  );
}

export default App;
