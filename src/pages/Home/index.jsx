import styles from "./index.module.css";

import { useCurrentPage } from "../../context/currentPageContext";

export default function Home() {
  const pageCtx = useCurrentPage();
  pageCtx.changePage("home");

  return (
    <div className={styles.home}>
      <section className={styles.intro}>

      </section>

      <section className={styles.works}>

      </section>
    </div>
  );
}
