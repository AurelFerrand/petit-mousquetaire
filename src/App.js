import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil/Acceuil";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
