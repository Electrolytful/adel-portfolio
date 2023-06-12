import styles from "./index.module.css";

import fiver from "/icons/fiverr.png";
import pfp from "/images/adel.jpg";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <img src={pfp} alt="profile image" width="200px" height="200px" />
      <h2>Adel Bedoud</h2>
      <h3>Aspiring Writer / Personal Trainer</h3>
      <ul className="bx-ul">
        <li>
          <i className="bx bx-right-arrow bx-fade-left"></i> MA Creative Writing
          Student
        </li>
        <li>
          <i className="bx bx-right-arrow bx-fade-left"></i> LLB Law Graduate
        </li>
        <li>
          <i className="bx bx-right-arrow bx-fade-left"></i> Personal Trainer
        </li>
      </ul>
      <div className={styles.icons}>
        <div className="icon" onClick={() => window.open("https://www.linkedin.com/in/adel-bedoud-937a7a22b/", "_blank")}>
          <box-icon type="logo" name="linkedin-square" size="40px"></box-icon>
        </div>
        <div className="icon" onClick={() => window.open("https://www.instagram.com/adelb098/", "_blank")}>
          <box-icon type="logo" name="instagram" size="40px"></box-icon>
        </div>
        <div className="icon" onClick={() => window.open("https://www.fiverr.com", "_blank")}>
          <img
            src={fiver}
            alt="fiverr icon"
            width="31px"
            height="31px"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>
    </div>
  );
}
