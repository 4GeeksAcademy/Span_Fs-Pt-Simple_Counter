import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./component/home.jsx";
import "../styles/index.css"; // Asegúrate de que la ruta es correcta

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  return <Home counter={counter} />;
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
