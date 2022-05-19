import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import SteveJobsComponent from "./components/SteveJobsComponent";
import BillGateComponent from "./components/BillGateComponent";
import JeffBezosComponent from "./components/JeffBezosComponent";
import ZuckerbergComponent from "./components/ZuckerbergComponent";
import MuskComponent from "./components/MuskComponent";
import PersonajesComponent from "./components/PersonajesComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route index element={<HomeComponent />} />
        <Route path="/personajes/:nombre" element={<PersonajesComponent />} />
        <Route path="/jobs" element={<SteveJobsComponent />} />
        <Route path="/gates" element={<BillGateComponent />} />
        <Route path="/bezos" element={<JeffBezosComponent />} />
        <Route path="/zuckerberg" element={<ZuckerbergComponent />} />
        <Route path="/musk" element={<MuskComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
