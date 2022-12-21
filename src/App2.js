import Pokedex from "./component/pokedex";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App2() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App2;
