import styles from "./index.module.css";

import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const NavStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid #000" : "",
      paddingBottom: "3px",
    };
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        Adel Bedoud - Writing
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={NavStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" style={NavStyles}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/get-in-touch" style={NavStyles}>
              Get in Touch
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
