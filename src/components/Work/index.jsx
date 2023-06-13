import styles from "./index.module.css";

export default function Work({ image, author, title, description, link }) {
  return (
    <div
      className={styles.work}
      onClick={() => window.open(`${link}`, "_blank")}
    >
      <img src={image} alt="cover image" />
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
