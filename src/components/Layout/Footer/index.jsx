import styles from "./index.module.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <p>London, UK | adelbedoudwriting@gmail.com</p>
        <p>© Adel Bedoud - Writing, 2023</p>
        <div className={styles.icons}>
          <div className={styles.icon} onClick={() => window.open("https://www.linkedin.com/in/adel-bedoud-937a7a22b/", "_blank")}>
            <box-icon
              type="logo"
              name="linkedin-square"
              size="35px"
              animation="tada-hover"
            ></box-icon>
          </div>

          <div className={styles.icon} onClick={() => window.open("https://www.instagram.com/adelb098/", "_blank")}>
            <box-icon
              type="logo"
              name="instagram"
              size="35px"
              animation="tada-hover"
            ></box-icon>
          </div>
        </div>
      </div>
      <div className={styles.navlinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/get-in-touch">Get in Touch</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
