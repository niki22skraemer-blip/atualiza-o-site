import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fecha tudo (menu lateral e dropdown)
  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  // Abre/Fecha o menu hambúrguer
  const toggleMenu = () => {
    setOpen((v) => !v);
    setDropdownOpen(false); 
  };

  // Lógica específica para o mobile: abre o "Histórico" ao clicar
  const toggleDropdown = (e) => {
    if (window.innerWidth <= 768) {
      // Impede ir para a página "Sobre" no primeiro clique para mostrar o submenu
      e.preventDefault(); 
      setDropdownOpen(!dropdownOpen);
    } else {
      // No desktop, o clique navega normal, o hover já mostra o menu
      closeMenu();
    }
  };

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

        <nav id="primary-nav" className={`nav ${open ? "is-open" : ""}`}>
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
            <NavLink to="/sistemas" className={checkActive} onClick={closeMenu}>
              Sistemas
            </NavLink> 
            
            {/* CONTAINER DO QUEM SOMOS + DROPDOWN */}
            <div className={`nav-item-container ${dropdownOpen ? "dropdown-active" : ""}`}>
              <NavLink 
                to="/sobre" 
                className={checkActive} 
                onClick={toggleDropdown}
              >
                Quem Somos
              </NavLink>
              
              <div className="submenu">
                <NavLink 
                  to="/historico" 
                  className="submenu-link" 
                  onClick={closeMenu}
                >
                  Histórico
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}