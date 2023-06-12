import styles from './index.module.css';

export default function Work({ image, author, title, description, link }) {
    return (
        <div className={styles.work} onClick={() => window.open(`${link}`, "_blank")}>
            <div className="image">
                <img src={image} alt="image" />
            </div>
            <p>{author}</p>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
