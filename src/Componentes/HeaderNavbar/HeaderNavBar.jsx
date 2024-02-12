import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

import { ThemeContext } from "../../context/ThemeContext";
import IconsList from "../IconList/IconList";

function HeaderBar({ onFilterChange, showCart }) {
  const menuOptions = ["Inicio", "Categoría", "Ofertas", "Contacto"];
  const [textoFiltro, setTextoFiltro] = useState("");

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setTextoFiltro(nuevoTexto);
    onFilterChange(nuevoTexto);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
  };

  const buttonStyles = {
    backgroundColor: theme === "dark" ? "#444" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#333",
    border: "1px solid",
  };

  const handleClickCartIcon = () => {
    showCart(); // Cambia el estado para mostrar la sección del carrito
  };

  return (
    <>
      <div className="container" style={styles}>
        <div className="logo" style={styles}>
          MiTienda
        </div>
        <div className="category">
          <ul>
            {menuOptions.map((opt) => (
              <li key={opt} style={styles}>
                {opt}
              </li>
            ))}
          </ul>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar Producto"
            value={textoFiltro}
            onChange={handleInputChange}
          />
        </div>
        <div className="container-icon">
          <div className="icon">
            <button>&#9825;</button>
          </div>
          <div className="icon">
            <button>&#128100;</button>
          </div>
          <IconsList onclickCartIcon={handleClickCartIcon} />
          <div className="icon">
            <button style={buttonStyles} onClick={toggleTheme}>
              &#9899; {theme === "Light" ? "oscuro" : "claro"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired, 
};

export default HeaderBar;
