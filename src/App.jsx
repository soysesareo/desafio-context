import "./styles.css";
import Context from "./context/Context";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [fotos, setFotos] = useState([]);
  console.log(fotos)
  const estadoGlobal = { fotos, setFotos }
  const getData = async () => {
    const res = await fetch("fotos.json")
    const data = await res.json()
    setFotos(data.photos)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
