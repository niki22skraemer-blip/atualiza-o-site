import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  // Esta função garante que a classe 'active' seja aplicada corretamente
  const checkActive = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className={open ? "is-open" : ""}>
      <div className="header-inner">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/Midias/VISONet-logo_horizontal_dark-blue_positivo.png" alt="VISONet" />
        </NavLink>

        <button className="menu-toggle" onClick={toggleMenu} type="button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav id="primary-nav" className="nav">
          <div className="nav-menu">
            <NavLink to="/drawback" className={checkActive} onClick={closeMenu}>
              Drawback
            </NavLink>
            <NavLink to="/educacional" className={checkActive} onClick={closeMenu}>
              Visoedu
            </NavLink>
            <NavLink to="/servicos" className={checkActive} onClick={closeMenu}>
              Serviços
            </NavLink>
            {/* O ERRO ESTAVA AQUI: Removi o onClick duplicado */}
            <NavLink to="/sistemas" className={checkActive} onClick={closeMenu}>
              Sistemas
            </NavLink> 
            <NavLink to="/sobre" className={checkActive} onClick={closeMenu}>
              Quem Somos
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}