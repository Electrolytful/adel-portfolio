import styles from './index.module.css';

export default function Button({ content }) {
    return <button className={styles.button} role="button">{content}</button>
}

